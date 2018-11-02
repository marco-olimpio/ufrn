var url = require('url');
var adr = 'http://localhost:8080/teste?primnome=jair&sobrenome=leite';
var q = url.parse(adr, true);

console.log(q.host); // 'localhost:8080'
console.log(q.pathname); // 'teste'
console.log(q.search); // query string

var qdata = q.query; //json
console.log(qdata.sobrenome); //elemento da QS