/** 
 
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Open
 * index 2 - High
 * index 3 - Low
 * index 4 - Close
 * index 5 - Volume
 */
 function unpack(rows, index) {
    return rows.map(function(row) {
      return row[index];
    });
  }
  
  // enter Ticker symbol
  function handleSubmit() {
    // prevent the page from refreshing
    d3.event.preventDefault();
  
    // select the input value
    var stock = d3.select("#stockInput").node().value;
    console.log(stock);
  
    // clear the input value
    d3.select("#stockInput").node().value = "";
  
    // create plot
    buildPlot(stock);
  }
  
  function buildPlot() {  
    d3.json(data.json).then(function(data) {
  
      // grab values from data.json to build the plots
      var name = data.dataset.name;
      var stock = data.dataset.dataset_code;
      var startDate = data.dataset.start_date;
      var endDate = data.dataset.end_date;
      var dates = unpack(data.dataset.data, 0);
      var openingPrices = unpack(data.dataset.data, 1);
      var highPrices = unpack(data.dataset.data, 2);
      var lowPrices = unpack(data.dataset.data, 3);
      var closingPrices = unpack(data.dataset.data, 4);
  
      var trace1 = {
        type: "scatter",
        mode: "lines",
        name: name,
        x: dates,
        y: closingPrices,
        line: {
          color: "#17BECF"
        }
      };
  
      // candlestick chart
      var trace2 = {
        type: "candlestick",
        x: dates,
        high: highPrices,
        low: lowPrices,
        open: openingPrices,
        close: closingPrices
      };
  
      var data = [trace1, trace2];
  
      var layout = {
        title: `${stock} closing price`,
        xaxis: {
          range: [startDate, endDate],
          type: "date"
        },
        yaxis: {
          autorange: true,
          type: "linear"
        }
      };
  
      Plotly.newPlot("plot", data, layout);
    });
  }
  
  
  d3.select("#submit").on("click", handleSubmit);
  