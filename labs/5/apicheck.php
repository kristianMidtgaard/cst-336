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
    
    case 'POST':
      
      //Retriving varibals from data in ajax. 
      $password = $_POST['password'];
      $username = $_POST['username'];
      
      //function to see if username is in password. Return true or false. 
      if(strstr($password,$username)){
        
          // Allow any client to access
          header("Access-Control-Allow-Origin: *");
          // Let the client know the format of the data being returned
          header("Content-Type: application/json");
    
          // Sending back down as fals
          echo json_encode(false);
          
      }else{
          
          //Sending back down as true
          echo json_encode(true);
      }
    
    break;
      
    case 'PUT':
      // TODO: Access-Control-Allow-Origin
      http_response_code(401);
      echo "Not Supported";
      break;
    case 'DELETE':
      // TODO: Access-Control-Allow-Origin
      http_response_code(401);
      break;
  }
?>