// Importa modulos de eventos 
var eventos = require('events');
// Cria um objeto emissor e um gestor de eventos
var emissorEventos = new eventos.EventEmitter(),
    gestorEventos = function conectado() {
            console.log('conexão estabelecida');
            //envia um evento
            emissorEventos.emit('recebido'); 
    };
// Associa o evnto connetado ao gestor de eventos 
emissorEventos.on('conexao', gestorEventos);

// Associa o recebido com uma função 
emissorEventos.on('recebido', function() {
    console.log('Dados recebidos com sucesso.'); 
});
// emite o evento 
emissorEventos.emit('conexao');
console.log("Finalizado.");