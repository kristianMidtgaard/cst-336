<?php

function getDatabaseConnection($dbname ='imagegallery'){
    
    $host = 'localhost';//cloud 9
    //$dbname = 'tcp';
    $username = 'kristianmidt';
    $password = '';
    
    //creates db connection
    $dbConn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    
    //display errors when accessing tables
    $dbConn -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    return $dbConn; 
}

?>