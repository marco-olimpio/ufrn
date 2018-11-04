var log = require('./modules/log/logger');
var sec = require('./modules/security/login');

log.setModuleName("teste");
log.setSessionUser("Kakaroto da Silva");


log.log("marco");

console.log(sec.login("marco1","123345"));
