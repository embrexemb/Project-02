import requests
from pprint import pprint
from config import api_key
import json
import pymongo
import pandas as pd
import time
from ratelimiter import RateLimiter

@RateLimiter(max_calls=5, period=61)
def do_something():
    pass

rate_limiter = RateLimiter(max_calls=5, period=61)

list = pd.read_csv ('Stock List.csv')
#print(list)

ticker_list=  list['Symbol'].tolist()
print(ticker_list)

        #Mongo client
client = pymongo.MongoClient("mongodb://localhost:27017/")
mydb1 = client["Stocks"]

        #base urls
base='https://www.alphavantage.co'

        #loops through all tickers in "Stock List.csv"
for ticker in ticker_list: 
            #runs with limiter            
    with rate_limiter:
        print(ticker)
                #API Call for current ticker  
        url = base+'/query?function=TIME_SERIES_DAILY&symbol='+ticker+'&outputsize=compact&apikey=api_key'
        r = requests.get(url)
        data = r.json()
    
        #pprint(data)
    
                #change json to dataframe
        df = pd.DataFrame.from_dict(data['Time Series (Daily)'])
    
                #transpose data, remove non-readable charater
        df2 = df.T
        df2.columns = df2.columns.str.replace("[.]", "-")
        df2.columns = df2.columns.str.replace(' ', '')
                #set Stock Symbol to database name
        mycol1 = mydb1[ticker]
                #set index on dataframe, convert dataframe to dictianary
        df2.reset_index(inplace=True)
        data_dict1 = df2.to_dict("records")
                #insert stock data to mongo database
        mycol1.insert_many(data_dict1,)
                #turn off index on dataframe for next stock
        df2.reset_index(inplace=False)
                #when limit is active, wait
        do_something()  


