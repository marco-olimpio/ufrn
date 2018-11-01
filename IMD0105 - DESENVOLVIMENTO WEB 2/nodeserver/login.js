var csv = require("./node_modules/fast-csv");

var autentication = new Array();

//console.log(__dirname);

csv
	.fromPath(__dirname+"/"+"http_authentication")
	.on("data", function(data){
		//console.log(data);
		autentication.push(data);
 	})
 	.on("end", function(){
		console.log("done");
 	});

var i;
console.log("SAIU");
for(i = 0 ; i<csv.lenght ; i++){
	console.log(csv[i]);
}

