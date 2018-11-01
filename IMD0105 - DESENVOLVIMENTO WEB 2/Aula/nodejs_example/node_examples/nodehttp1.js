var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Esta página carrega a saída do programa executando NODEJS');
}).listen(8080);