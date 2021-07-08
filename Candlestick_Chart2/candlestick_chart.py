from IPython.core.display import display, HTML
display(HTML("<style>.container { width:100% !important; }</style>"))

# from mplfinance import candlestick_ohlc


# ___library_import_statements___
import pandas as pd

# for pandas_datareader, otherwise it might have issues, sometimes there is some version mismatch
pd.core.common.is_list_like = pd.api.types.is_list_like

# make pandas to print dataframes nicely
pd.set_option('expand_frame_repr', False)  

import pandas_datareader.data as web
import numpy as np
import matplotlib.pyplot as plt
import datetime 
import time
import mplfinance as fplt

#newest yahoo API 
import yfinance as yahoo_finance

#optional 
#yahoo_finance.pdr_override()

plt.show

ticker = 'AAPL'

start_time = datetime.datetime(2018, 1, 1)
end_time = datetime.datetime.now().date().isoformat()

import yfinance as yf
data = yf.download(ticker, start="2021-03-01", end="2021-06-30")
print (data)
data.reset_index()
stock_df = data

def computeRSI (data, time_window):
    diff = data.diff(1).dropna()        # diff in one field(one day)

    #this preservers dimensions off diff values
    up_chg = 0 * diff
    down_chg = 0 * diff
    
    # up change is equal to the positive difference, otherwise equal to zero
    up_chg[diff > 0] = diff[ diff>0 ]
    
    # down change is equal to negative deifference, otherwise equal to zero
    down_chg[diff < 0] = diff[ diff < 0 ]
    
    # check pandas documentation for ewm
    # https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.DataFrame.ewm.html
    # values are related to exponential decay
    # we set com=time_window-1 so we get decay alpha=1/time_window
    up_chg_avg   = up_chg.ewm(com=time_window-1 , min_periods=time_window).mean()
    down_chg_avg = down_chg.ewm(com=time_window-1 , min_periods=time_window).mean()
    
    rs = abs(up_chg_avg/down_chg_avg)
    rsi = 100 - 100/(1+rs)
    return rsi

stock_df['RSI'] = computeRSI(stock_df['Adj Close'], 14)

# stock_df=stock_df.reset_index()
print(stock_df.head())
print(stock_df.tail())

fplt.plot(
    stock_df,
    type='candle',
    style='charles',
    title='Apple',
    ylabel='price ($)',
    volume=True,
    ylabel_lower='Share\nTranded',
  )

fplt.show()