<?php
    include '../dbConnection.php';
    $conn = getDatabaseConnection("cinder");
    
    
    $sql = "SELECT * FROM answer_type_id WHERE 1";
           
           
    $stmt = $conn->prepare($sql);
    $stmt->execute($np);
    $records = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($records); 
?>