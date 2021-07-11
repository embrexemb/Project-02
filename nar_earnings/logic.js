var queryUrl = 'https://financialmodelingprep.com/api/v3/earnings-surpises/AAPL?apikey=0aa7a8b3e15e895ec2ba0d1e74b40e79';

d3.json(queryUrl).then(function(data) {
    console.log(data)

    var date = data.map((date) => {
        return date.date;
      });
      console.log(date)
      
      var symbol = data.map((symbol) => {
        return symbol.symbol;
      });
      console.log(date)
      
      var actualEarningResult = data.map((actualEarningResult) => {
        return actualEarningResult.actualEarningResult
      });
      console.log(actualEarningResult)
      
      var estimatedEarning = data.map((estimatedEarning) => {
        return estimatedEarning.estimatedEarning
      });
      console.log(estimatedEarning)
      
      var trace1 = {
        x: date,
        y: estimatedEarning,
        mode: 'markers',
        type: 'scatter',
        name: 'Estimated Earning',
        marker: { size: 12 }
      };
      
      var trace2 = {
        x: date,
        y: actualEarningResult,
        mode: 'markers',
        type: 'scatter',
        name: 'Actual Earning',
        marker: { size: 12 }
      };
      
      var data = [ trace1, trace2 ];
      
      var layout = {
        xaxis: {
          range: [ data ]
        },
        yaxis: {
          range: [0.2, 2]
        },
        title:'Data Labels Hover'
      };
      
      Plotly.newPlot('plot', data, layout);
    })
  


