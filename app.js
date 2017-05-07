var weather = require('./weather.js');
var location = require('./location.js')

// setup yargs to have a user provided location --location or -l arguments
var argv = require('yargs')
	.command('weather', 'Fetches weather for defined location', function (yargs) {
		yargs.options({
			location: {
				demand: false,
				alias: 'l',
				description: 'Your location goes here',
				type: 'string'
			}
		}).help('help');
	})
	.help('help')
	.argv;

var command = argv._[0]

if(typeof argv.l === 'string' && argv.l.length > 0)
{
	weather(argv.l, function (currentWeather) {
		console.log(currentWeather);
	});
} else {
	location(function (location) {
		if(location) {
			weather(location.city, function (currentWeather) {
				console.log(currentWeather);
			});
		} else {
			console.log('Unable to guess location');
		}
	});
}
















