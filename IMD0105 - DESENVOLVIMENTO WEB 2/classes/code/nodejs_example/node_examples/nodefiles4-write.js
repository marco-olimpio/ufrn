var fs = require('fs');

fs.writeFile('testenode.txt', 'nome1:valor1\n', function (err) {
  if (err) throw err;
  console.log('Arquivo substituido');
});
