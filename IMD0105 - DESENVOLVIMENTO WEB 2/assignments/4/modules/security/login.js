//var log = require("./modules/log/logger");
var secureDb = "./modules/security/secure.json";
var fs = require("fs");
var autentication = new Array();
var connected = false;

/***
 * Makes a new login
 * @param user User login
 * @param pass User password
 */
function login(user,pass){
	var jsonContent = loadSecureJson();
	if(!connected){
		var passCheck = isUserAlreadExists(user);
		if(pass == passCheck){
			connected = true;
			return true;
		}
		else
			return false;	
	}
	else
		return true	
}

/**
 * Desconect user
 * @param user User login
 * @return true if correted disconnected
 */
function logout(user){
	connected = false;
	return true;
}

/**
 * Loads db
 * @return the connection to the database
 */
function loadSecureJson(){

	var contents = fs.readFileSync(secureDb);
	return jsonContent = JSON.parse(contents);
}

/**
 * Check the user
 * @return 'encrypted' password for comparition
 */
function isUserAlreadExists(username){
	var jsonContent = loadSecureJson();
	var i;
	//log.setModuleName("login/isUserAlreadExists");	

	try{
		for(i = 0; i < jsonContent.logins.length ;i++){
			console.log(jsonContent.logins[i]);	
			if(username == jsonContent.logins[i].username)
				return jsonContent.logins[i].password;
		}
	}catch(err){
		console.log(err);
		return "";	
	}
	return "";
}

module.exports.login = login;
module.exports.logout = logout;
