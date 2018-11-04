/**
 * @author Marco Olimpio - marco at gmail.com
 */

var moment = require('moment');

var _moduleName = "";
var _sessionUser = "anonymous";

function log(message){
	console.log("(" + moment().format('lll') +  ") User:" + _sessionUser + " call:"+ _moduleName + " -   " + message);
}

function setModuleName(moduleName){
	_moduleName = moduleName;
}

function setSessionUser(sessionUser){
	if(sessionUser =="")
		_sessionUser = "anonymous";
	else
		_sessionUser = sessionUser;
}

module.exports.log = log;
module.exports.setModuleName = setModuleName;
module.exports.setSessionUser = setSessionUser;
