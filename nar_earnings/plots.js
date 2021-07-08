var apiKey = "NABDZFV4HO4HQ68G"

var url = 'https://www.alphavantage.co/query?function=EARNINGS&symbol=IBM&apikey=NABDZFV4HO4HQ68G';

console.log(url)



/**
* @param {array} rows
* @param {integer} index
* index 0 - Symbol
* index 1 - Fiscal
* index 2 - Reported
*/

function unpack(rows, index){
    return rows.map(function(row) {
        return row[index]
    })
}


