/**
 *
 * @author Marco Olimpio - marco.olimpio at google e-mail
 */

//=======================================================
//app modules
var log = require('./modules/log/logger');
var sec = require('./modules/security/login');
var tsk = require('./modules/task/tasks');

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

//app.param(['id', 'page'], function (req, res, next, value) {
//	console.log('CALLED ONLY ONCE with', value);
// 	next();
//});
///====================================================================
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

///====================================================================

app.get('/task/delete/', function(request, response){
	if(tsk.delete(request.query.id))
		response.status(200);
	else		
		response.status(

});

app.get('/task/read/', function(request, response){
	if(response.query.id == null)	
		return tsk.readalltsk();
	else
		return tsk.readtsk(request.query.id);	
});

app.get('/task/update/', function(request, response){
	if(response.query.id != null){
		var id = request.query.id;
		var descricao = request.query.subject;
		var detalhe = request.query.description;
		var data = request.query.date;
		var tskstatus = request.query.status;	
		tsk.updatetsk(id, descricao, detalhe, data, tskstatus);	
		response.status(200);
		response.send("true");
		return true;
	}
	else
		response.status(304);
		response.send("true");
		return false;	
});


app.get('/task/create/', function(request, response){
	if(response.query.id != null){
		var id = request.query.id;
		var descricao = request.query.subject;
		var detalhe = request.query.description;
		var data = request.query.date;
		var tskstatus = request.query.status;	
		tsk.createtsk(id, descricao, detalhe, data, tskstatus);	
		response.status(200);
		response.send("true");
		return true;
	}
	else
		response.status(304);
		response.send("true");
		return false;	
});

app.listen(3000);

