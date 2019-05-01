<?php

    $host = "127.0.0.1";
    $dbname = "file";
    $username = "kristianmidt";
    $password = "";
  
    // Get Data from DB
    $dbConn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $dbConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    
    $sql = "SELECT media FROM up_files ";
    $stmt = $dbConn->prepare($sql);
    $stmt->execute( array(":media"=> $_GET['media']));

    $stmt->bindColumn('media', $data, PDO::PARAM_LOB);
    $record = $stmt->fetch(PDO::FETCH_BOUND);
    
    if (!empty($record)){
        header('Content-Type:' . $record['media']);   //specifies the mime type
        header('Content-Disposition: inline;');
        echo $data;
     }
      
  
   
?>