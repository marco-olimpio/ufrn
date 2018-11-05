<?php

$tarefas = null;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
		
	if(!empty($_POST['tarefas'])) {
		$tarefas = $_POST['tarefas'];
		$users = fopen("tarefas.json","w+") or die("unable to open file!");
		fwrite($users, $tarefas);
		fclose($users);
	} else
		echo "Valores a adicionar estão vazios. Nada a inserir!";
}

?>
