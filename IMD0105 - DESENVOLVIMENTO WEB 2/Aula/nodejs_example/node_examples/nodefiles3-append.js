var fs = require('fs');

fs.appendFile('testenode.txt', 'nome1:valor1\n', function (err) {
  if (err) throw err;
  console.log('Arquivo salvo');
});
