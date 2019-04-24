<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Cinder</title>
        <link href="css/styles.css" rel="stylesheet" type="text/css"/>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script>
            /*global $*/
            $(document).ready(function(){
                
                $.ajax({
                    type: "GET", 
                    url: "api/getUser.php",
                    dataType: "json",
                    success: function(data, status){
                        console.log(data);
                        data.forEach(function(key){
                            
                            if(data.length !=0){
                               $("#results").html("");
                               $("#results").append("About " + data[0]['user_id'] + "<br/>");
                               $("#results").append( data[0]['about_me'] + "<br/>");
                               $("#results").append("<img src='" + data[0]['picture_url'] + "' width='200'/> <br/>"); 
                            }
                         });
                    }
                    
                });
                
                $("#like").on("change", function(e) {
                    
                     $.ajax({
                    type: "GET", 
                    url: "api/getHistory.php",
                    dataType: {
                         "like" : $("[name=like]").val(),
                        
                    },
                    success: function(data, status){
                      
                    }
                    });
                });
                
                $("#dislike").on("change", function(e) {

                });
                
                $("#spr").on("change", function(e) {

                });
                
            });
        </script>
    </head>

   
    <body>
        <div id="topBox">
            <nav>
                <a href="index.php"><u>Match</u></a>
                <a href="history.html"><u>History</u></a>
            </nav>
                 <h1>Match</h1>
            <br/><br/>
        </div>
        
        <main>
         
            <div id="mainBox">
                
                <div id="results"> </div>
                
                  <br/>
                  <div id="down">
                    <button id="like">
                      <img src="img/like.png" name="like" alt="Like button" width="35" />
                    </button>
                    
                    <button id="spr">
                      <img src="img/spr.png" name="spr" alt="spr button" width="35" />
                    </button>
                    
                    <button id="dislike">
                      <img src="img/dislike.png" name="disLike" alt="disLike button" width="35" />
                    </button>
              </div>
              
            </div>
        
        </main>
        
    </body>
    
    <footer id="main-footer">
       
    </footer>
</html>