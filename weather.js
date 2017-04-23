var request = require('request');
var url ='http://api.openweathermap.org/data/2.5/weather?q=San%20Diego&units=imperial&APPID=abed5b19c10b1cea491f0ee1b47fafd0';

module.exports = function (callback) {
	request({
		url: url,
		json: true
	}, function (error, response, body) {
		if(error) {
			callback('Unable to fetch weather');
		} else {
			callback('It\'s ' + body.main.temp + ' in ' + body.name + '!');
	}
});
	//callback('here is the current weather');
}