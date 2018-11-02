/**
* This little server is tailored to load and modify a simple json file and to make a simple
* login file based autentication
* @author Marco Olimpio - marco.olimpio [at] gmail.com
*/

/** Required module concentrate log features*/
const logger = require('./logger');

/** Required module login */
const login = require('./login');

/** Required module for json handling */
const jjobs = require('./json');

/** HTTP module */
const http = require('http');

/** */
const url = require('url');


var serverConfiguration = new Object();
serverConfiguration.readServerConfig('http_server_config.txt');
	
http.createServer((request, response) => {

}).listen();


function readServerConfig(var http_server_configuration_file)

