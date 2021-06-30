var apiKey ='NABDZFV4HO4HQ68G'

var url = 'https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=${apiKey}';

request.get({
    url: url,
    json: true,
    headers: {'User-Agent': 'request'}
  }, (err, res, data) => {
    if (err) {
      console.log('Error:', err);
    } else if (res.statusCode !== 200) {
      console.log('Status:', res.statusCode);
    } else {
      
      console.log(data);
    }
});

/**
 * Helper function to select stock data
 * Returns an array of values
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

  function buildPlot() {
    d3.jason(url).then(result => {
      console.log(result)
      var name = result.dataset.name;
      var data = result.dataset.data;
  
      var dates = unpack(data, 0);
      console.log(dates)
    })
  }
