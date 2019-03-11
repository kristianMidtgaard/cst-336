<?php
  session_start();

  $httpMethod = strtoupper($_SERVER['REQUEST_METHOD']);

  switch($httpMethod) {
    case "OPTIONS":
      // Allows anyone to hit your API, not just this c9 domain
      header("Access-Control-Allow-Headers: X-ACCESS_TOKEN, Access-Control-Allow-Origin, Authorization, Origin, X-Requested-With, Content-Type, Content-Range, Content-Disposition, Content-Description");
      header("Access-Control-Allow-Methods: POST, GET");
      header("Access-Control-Max-Age: 3600");
      exit();
      
    case "GET":
      // Allow any client to access
      header("Access-Control-Allow-Origin: *");
      // Let the client know the format of the data being returned
      header("Content-Type: application/json");
      
     
      //$password which is an associative array of letters and number. 
      $lettersAndNumber = array("a", "b", "c", "d", "e", "f", "g", "h", "0", "1", "2", "3", "4", "5", "6", "7");
      $results = array();
      
      //Return 9 random letters and number. 
      //for loop going 9 times. 
      for ($i = 0; $i < 9; $i++) {
      
      //Filling up the resluts array. From function random. 
      $results[] = $lettersAndNumber[array_rand($lettersAndNumber)];
        
      }
      
      //Sending it back like a string. 
      echo json_encode(implode($results));
      
      break;
  }
?>