
var http = require('http');
var url = require('url');
var util = require('util');
var fs = require('fs');
const path = require('path');
const express = require('express');
const app = new express();
var connected = false;
app.get('/', function(request, response){
	//path.resolve('./');	
	response.sendFile(path.resolve(__dirname,'./doc.html'));
	console.log("Documentation request");	
});

app.param(['id', 'page'], function (req, res, next, value) {
  console.log('CALLED ONLY ONCE with', value);
  next();
});

app.get('/login', function(request, response){
	var contents = fs.readFileSync("secure.json");
	var jsonContent = JSON.parse(contents);
	if(request.query.user == jsonContent.username && request.query.pass == jsonContent.password){
			response.status(200);
			response.send("connected");
			console.log("Connected: User marco");
			connected = true;
	}
	else{
			response.status(200);
			response.send("not allowed");
			connected = false;
	}
});

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

//		http.createServer(function (req, res) {

	//console.log(req.protocol + '://' + req.get('host') + req.originalUrl);
//	var url_parts = url.parse(req.url);
	//console.log(url_parts );
	//console.log("---------------");
	//console.log(url_parts["pathname"]);
	//console.log("---------------");
//	var url_split = url_parts["pathname"].split("/");
	//Check for user
//	if(url_split[1]=='login'){
		//var i;
		//for(i=0;i<url_split.length;i++){
		//	console.log(url_split[i]);
		//}
		
//	}else  
//		{
//		if(url_split[1]=='task'){
 //			if(url_split[2] == 'create'){
//				console.log("CREATE");
//			}
//		}
//	}
//	fs.readFile('doc.html',function (err, data){
//		res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
//		res.write(data);
//		res.end();
//	});	


	//console.log(url_parts);
	//console.log(url_parts.pathname);
	//if(url_parts
	//res.writeHead(200, {'Content-Type': 'text/html'});
		//console.log(util.inspect(url, false, null, true));
	//var q = url.parse(req.url, true).query;
		//console.log(util.inspect(q, false, null, true));
	//var txt = q.primnome + " " + q.sobrenome;
	//res.end(txt);

//}).listen(8080);
