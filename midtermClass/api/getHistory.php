<?php

    include '../dbConnection.php';
    
    $conn = getDatabaseConnection("cinder"); 
    
    $sql = "SELECT user, user_id FROM match ORDER BY user";
    
    $stmt = $conn->prepare($sql);
    $stmt ->execute();
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC); 
    echo json_encode($records); 
    
?>