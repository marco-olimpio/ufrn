var events = require('events');
var eventEmitter     = new events.EventEmitter();
// listener #1
var app1 = function app1() {
    console.log('app1 executed.');
 }
// listener #2
var app2 = function app2() {
  console.log('app2 executed.');
}
// Bind the connection event with the listner1 function 
eventEmitter.addListener('connection', app1);
// Bind the connection event with the listner2 function 
eventEmitter.on('connection', app2);
var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");
// Fire the connection event 
eventEmitter.emit('connection');
// Remove the binding of listner1 function 
eventEmitter.removeListener('connection', app1); 
console.log("Listner1 will not listen now.");
// Fire the connection event eventEmitter.emit('connection');
eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event"); eventEmitter.emit('connection');
console.log("Program Ended.");