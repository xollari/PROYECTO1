<?php

    //De utilizar el puerto predeterminado 3306, no es necesario incluir 
    //las variables del puerto $port
    /*
    $host = 'localhost';
    $port = '3307'; // Especifiqué este puerto 3307 porque es el que usa mi mysql en xampp
    $user = 'root'; 
    $db = 'sistema_registro'; //Nombre de base de datos. Puede ser cualquier nombre
    $pass = ''; //En mi mysql no existe password, por ello está vacío

    try {
    //Aqui tambien añadí la variable del puerto que utilizo
    $pdo = new PDO('mysql:host='.$host.';port='.$port.';dbname='.$db.';charset=utf8', $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (Exception $e) {
    echo 'error: '.$e->getMessage();
    }
    */


    $DBhostname = 'localhost';  
    $DBusername = 'id21118080_root2';
    $DBpassword = ''; 
    $DBname = 'id21118080_prueba_proyecto_uno';
  


    //Connection
    $conn=mysqli_connect($DBhostname, $DBusername, $DBpassword, $DBname);
  
    if(!$conn){
        die("Connection failed". mysqli_connect_error());
    }
        echo("Connection Succesfully");

?>