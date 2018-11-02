var url = 'http://mylogger.io/log';

function log(message){
	var now = Date.now();

	console.log(now + ": " + message);
}

module.exports.lio = log;
module.exports.endPoint = url;
