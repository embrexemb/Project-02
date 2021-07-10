var url = 'https://financialmodelingprep.com/api/v3/earnings-surpises/AAPL?apikey=0aa7a8b3e15e895ec2ba0d1e74b40e79';

console.log(url)


/**
 * Helper function to select stock data
 * Returns an array of values
 * @param {array} rows
 * @param {integer} index
 * index 0 - Date
 * index 1 - Symbol
 * index 2 - Actual
 * index 3 - Estimated
*/

function unpack(rows, index){
  return rows.map(function(row) {
      return row[index]
  })
}

function buildPlot() {
  d3.jason(url).then(result => {
    console.log(result)
    var name = result.earnings-surpises.name;
    var data = result.earnings-surpises.data;

    var date = unpack(data, 0);
    console.log(date)
  })
}

