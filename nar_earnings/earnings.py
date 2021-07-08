import pandas as pd
import json
import requests

list = pd.read_csv('Stock List.csv')
ticker_list = list['Symbol'].tolist()


for ticker in ticker_list:
    
     url = "https://twelve-data1.p.rapidapi.com/quote"
     querystring = {"symbol":"+ticker+","interval":"1month","outputsize":"30","format":"json"}
     headers = {
        'x-rapidapi-key': "c81af1a058msh121c52584d5e037p18092ejsn4d644da6f0c4",
        'x-rapidapi-host': "twelve-data1.p.rapidapi.com"
        }

response = requests.request("GET", url, headers=headers, params=querystring)
print(response.text)


