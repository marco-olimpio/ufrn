var fs = require('fs');

var dados = fs.readFile('../json/tarefas.json', 'utf8');
console.log(dados);
console.log('depois de ler...');
