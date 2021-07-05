var apiKey = "NABDZFV4HO4HQ68G"

// replace the "demo" apikey below with your own key from https://www.alphavantage.co/support/#api-key
var url = 'https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=NABDZFV4HO4HQ68G';

console.log(url)

function EARNINGS(rows, index) {
  return rows.map(function(row) {
    return row[index]
  })
}

function buildPlot() {
  d3.json(url).then(result =>{
    console.log(result)
    var name = result.dataset.name;
    var data = result.dataset.data;

    var dates = unpack(data, 0);
    console.log(datas)
  })
}

