var express = require('express');
var app = express();

app.use(express.static('public'));
app.get('/express-form1.html', function (req, res) {
   res.sendFile( __dirname + "/" + "express-form1.html" );
})

app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      primnome:req.query.primnome,
      sobrenome:req.query.sobrenome
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Exemplo escutando em http://%s:%s", host, port)
})