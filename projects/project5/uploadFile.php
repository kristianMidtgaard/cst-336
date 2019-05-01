<?php 
//$max_file_size = 10*1024*1024; //10MB
//echo '<script>console.log("")</script>';
 
 function filterUploadedFile() {
   
  $allowedTypes = array("text/plain","image/png");
  $allowedExtensions = array("txt", "png");
  $allowedSize = 10*1024*1024;
  $filterError = "";
  
  if (!in_array($_FILES["fileName"]["type"],  $allowedTypes ) ) {
        $filterError = "Invalid type. <br>";
   }

  $fileName = $_FILES["fileName"]["name"];
   if (!in_array(substr($fileName,strrpos($fileName,".")+1), $allowedExtensions) ) {
       $filterError = "Invalid extension. <br>";
    }

   if ($_FILES["fileName"]["size"]  > $allowedSize  ) {
        $filterError .= "File size too big. <br>";
    }
    return $filterError;
  }


  if ($_FILES["fileName"]["error"] > 0) {
    echo "Error: " . $_FILES["fileName"]["error"] . "<br>";
  }
  else {
    echo "Epost: " . $_POST["epost"]. "<br>";
    echo "Caption: " . $_POST["caption"] . "<br>";
    echo "Upload: " . $_FILES["fileName"]["name"] . "<br>";
    echo "Type: " . $_FILES["fileName"]["type"] . "<br>";
    echo "Size: " . ($_FILES["fileName"]["size"] / 1024) . " KB<br>";
    echo "Stored in: " . $_FILES["fileName"]["tmp_name"] . "<br><br>";
    
    
    $host = "127.0.0.1";
    $dbname = "file";
    $username = "kristianmidt";
    $password = "";
  
    // Get Data from DB
    $dbConn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $dbConn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    
    $binaryData = file_get_contents($_FILES["fileName"]["tmp_name"]);
    $sql = "INSERT INTO up_files (	email_address, caption, media ) " .
              "  VALUES (:email_address, :caption, :media) ";
              
    $stm=$dbConn->prepare($sql);
    
    $stm->execute(array (":email_address"=>$_POST["epost"],
                         ":caption"=>$_POST["caption"],
                         ":media"=>$binaryData));
                         
    echo "<br />File saved into database <br /><br />";  
  }
    
    
?>

