/**
 * This module is responsible for control tasks
 * @author Marco Olimpio - marco.olimpio at gmail.com
 * @ver 0.1
 */

var fs = require('fs');
var taskdb = "./db/tasks.json";

/**
 * Add tasks to the database
 * @id The task ID
 * @descricao The description of the task
 * @detalhe The detailed description of the task
 * @data The deadline date
 * @taskStatus One of the 'todo', 'doing' or 'done' status
 * @return true if the operation with success
 */
function addtsk(id, descricao, detalhe, data, taskStatus){
	var db = loadDb();
	try{
		if(findTaskById(id) == ""){	
			db.task.push({"id":id, "descricao": descricao, "detalhe": detalhe,"data": data,"status": taskStatus});	
			persistDb(db);	
			return true;
		}else
			return false;
	}catch(err)
		console.log(err);
	return false;	
}

/**
 * */
function updatetsk(id, descricao, detalhe, data, taskStatus){
	try{
		var task = findTaskById(id);
		task['descricao'] = descricao;
		task['detalhe'] = detalhe;
		task['data'] = data;
		task['status'] = taskStatus;

		persistDb(db);	
		return true;	
	}catch(err)
		console.log(err);
	return false;
}

/**
 * */
function deletetsk(id){
	var db = loadDb();
	try{
		delete db.task.id;
		persistDb(db);	
		return true;
	}catch(err)
			console.log(err);
	return false;
}

function readtsk(id){
	return findTaskById(id);	
}

function readalltsk(){
	var db = loadDb();
	return db;	
}

function loadDb(){
	var content = fs.readFileSync(taskdb);
	return dbContent = JSON.parse(content);
}

function persistDb(modifiedJson){
	var originalJson = loadDb();
	originalJson = JSON.stringify(modifiedJson);	
}

function findTaskById(id){
	var db = loadDb();
	var i;
	for(i=0; i< db.task.length; i++){
		if(id == db.task[i].id)
			return db.task[i];
	}
	return "";	
}

module.exports.addtsk = addtsk;
module.exports.updatetsk = updatetsk;
module.exports.deletetsk = deletetsk;
module.exports.readtsk = readtsk;
module.exports.readalltsk = readalltsk;

