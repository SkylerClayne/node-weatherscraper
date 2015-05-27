var request = require("request"); 
var cheerio = require("cheerio");
   
module.exports = function scrap(location){ 
	var url = "http://www.weather-forecast.com/locations/" + location + "/metars/latest";
	request(url, function (error, response, body) {
        if (!error) {
                var $ = cheerio.load(body),
                        temperature = $(".metar-table .temp").html();
                        
                console.log("It’s " + temperature + " degrees Fahrenheit.");
        } else {
                console.log("We’ve encountered an error: " + error);
        }
	});
}