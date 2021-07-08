d3.csv("./Stock List.csv").then(function(stockData) {
    console.log(stockData)
    
    var stock = stockData.map(data => data.stock);
    console.log("stocks", stock)

    stockData.forEach(function(data) {
        data.stock = +data.symbol;
        console.log("Stock", data.name)
        console.log("Symbol", data.symbol)
    });
}).catch(function(error) {
    console.log(error)
});

const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://twelve-data1.p.rapidapi.com/quote?symbol=AMZN&interval=1month&outputsize=30&format=json",
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "c81af1a058msh121c52584d5e037p18092ejsn4d644da6f0c4",
		"x-rapidapi-host": "twelve-data1.p.rapidapi.com"
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
});
