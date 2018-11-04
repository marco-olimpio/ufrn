/**
 *
 * @author Marco Olimpio - marco.olimpio at google e-mail
 */

//=======================================================
//app modules
var log = require('./modules/log/logger');
var sec = require('./modules/security/login');

//node modules
var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs');
const path = require('path');
const express = require('express');
const app = new express();

var connected = false;

//=======================================================

app.get('/', function(request, response){
	log.setModuleName("root");
	log.log("documentation request");
	response.sendFile(path.resolve(__dirname,'./assets/doc.html'));
});

app.param(['id', 'page'], function (req, res, next, value) {
	console.log('CALLED ONLY ONCE with', value);
 	next();
});

app.get('/login', function(request, response){
	if(sec.login(request.query.user, request.query.pass)){
			response.status(200);
			response.send("connected");
			console.log("Connected: User " + request.query.user);
			connected = true;
	}
	else{
			response.status(200);
			response.send("not allowed");
			connected = false;
	}
});


app.get('/logout', function(request, response){
	if(sec.logout(request.query.user)){
			response.status(200);
			response.send("disconnected");
			console.log("disconectioni " + request.query.user);
			connected = true;
	}
}


app.get('/task/delete/:id', function(request, response){
	console.log("delete: ID: ");//TODO	
});

app.get('/task/get', function(request, response){
	try{
		console.log("processando...   1");
		if(response.query.id == null){	
			console.log("processando...  4");
			response.sendFile(path.resolve(__dirname, 'tasks.json'));	
		}
		else{
			console.log("processando...  2");
			var contents = fs.readFileSync("tasks.json");
			var jsonContent = JSON.parse(contents);
			var i;   
			console.log("processando...  3");
			console.log(jsonContent);
			for(i in jsonContent.task){
					console.log(jsonContent.task[i].id);
					console.log(jsonContent.task[i].descricao);
					console.log(jsonContent.task[i].detalhe);
					console.log(jsonContent.task[i].data);
					console.log(jsonContent.task[i].status);
			}
		}
		console.log("task/get - success");
	}catch(err){
		console.log("task/get - problem to process the request");
		console.log(err);	
	}
		
});

app.get('/task/rttttiiiIrde    /:id', function(request, response){
	
});

app.listen(3000);

