var url = 'https://financialmodelingprep.com/api/v3/earnings-surpises/AAPL?apikey=0aa7a8b3e15e895ec2ba0d1e74b40e79';

console.log(url)

var stock = [ 
  {
    "date" : "2021-04-28",
    "symbol" : "AAPL",
    "actualEarningResult" : 1.4,
    "estimatedEarning" : 0.99
  }, 
  {
    "date" : "2021-01-27",
    "symbol" : "AAPL",
    "actualEarningResult" : 1.68,
    "estimatedEarning" : 1.41
  }, 
  {
    "date" : "2020-10-29",
    "symbol" : "AAPL",
    "actualEarningResult" : 0.73,
    "estimatedEarning" : 0.7
  }, 
  {
    "date" : "2020-07-30",
    "symbol" : "AAPL",
    "actualEarningResult" : 0.65,
    "estimatedEarning" : 0.51
  }, 
  {
    "date" : "2020-04-30",
    "symbol" : "AAPL",
    "actualEarningResult" : 0.64,
    "estimatedEarning" : 0.56
  }, 
  {
    "date" : "2020-01-28",
    "symbol" : "AAPL",
    "actualEarningResult" : 1.25,
    "estimatedEarning" : 1.14
  }, 
  {
    "date" : "2019-10-30",
    "symbol" : "AAPL",
    "actualEarningResult" : 0.76,
    "estimatedEarning" : 0.71
  }, 
  {
    "date" : "2019-07-30",
    "symbol" : "AAPL",
    "actualEarningResult" : 0.55,
    "estimatedEarning" : 0.53
  }, 
  {
    "date" : "2019-04-30",
    "symbol" : "AAPL",
    "actualEarningResult" : 0.62,
    "estimatedEarning" : 0.59
  }, 
  {
    "date" : "2019-01-29",
    "symbol" : "AAPL",
    "actualEarningResult" : 1.05,
    "estimatedEarning" : 1.04
  }, 
  {
    "date" : "2018-11-01",
    "symbol" : "AAPL",
    "actualEarningResult" : 0.73,
    "estimatedEarning" : 0.7
  } ]


var date = stock.map((date) => {
  return date.date;
});
console.log(date)

var symbol = stock.map((symbol) => {
  return symbol.symbol;
});
console.log(date)

var actualEarningResult = stock.map((actualEarningResult) => {
  return actualEarningResult.actualEarningResult
});
console.log(actualEarningResult)

var estimatedEarning = stock.map((estimatedEarning) => {
  return estimatedEarning.estimatedEarning
});
console.log(estimatedEarning)

var trace1 = {
  type: 'scatter',
  x: date,
  y: actualEarningResult,
  mode: 'markers',
  name: 'Actual Earnings',
  marker: {
    color: 'rgba(156, 165, 196, 0.95)',
    line: {
      color: 'rgba(156, 165, 196, 1.0)',
      width: 1,
    },
    symbol: 'circle',
    size: 16
  }
};

var trace2 = {
  x: date,
  y: estimatedEarning,
  mode: 'markers',
  name: 'Estimated Earnings',
  marker: {
    color: 'rgba(204, 204, 204, 0.95)',
    line: {
      color: 'rgba(217, 217, 217, 1.0)',
      width: 1,
    },
    symbol: 'circle',
    size: 16
  }
};

var data = [trace1, trace2];

var layout = {
  title: 'Stock Earnings for APPL',
  xaxis: {
    showgrid: false,
    showline: true,
    linecolor: 'rgb(102, 102, 102)',
    titlefont: {
      font: {
        color: 'rgb(204, 204, 204)'
      }
    },
    tickfont: {
      font: {
        color: 'rgb(102, 102, 102)'
      }
    },
    autotick: false,
    dtick: 20,
    ticks: 'outside',
    tickcolor: 'rgb(102, 102, 102)'
  },
  margin: {
    l: 140,
    r: 40,
    b: 50,
    t: 80
  },
  legend: {
    font: {
      size: 10,
    },
    yanchor: 'middle',
    xanchor: 'right'
  },
  width: 1000,
  height: 600,
  paper_bgcolor: 'rgb(254, 247, 234)',
  plot_bgcolor: 'rgb(254, 247, 234)',
  hovermode: 'closest'
};

Plotly.newPlot('plot', data, layout);