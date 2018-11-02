var fs = require('fs');

fs.readFile('../json/tarefas.json', 'utf8', function(err, dados) {
    console.log(dados);
  });

console.log('depois de ler...');
