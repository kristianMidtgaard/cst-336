$(document).ready(function() {
    
    //State ajax 
    $("#state").change(function() {

        $.ajax({
            type: "get",
            url: "http://itcdland.csumb.edu/~milara/ajax/countyList.php",
            dataType: "json",
            data: {
                
                //adding the state to url . 
                "state": $("#state").val(),
            },
            success: function(data) {
                
                //Setting list empty. 
                $("#countySelect").empty();
                
                //for loop that puting in the countylist in option tags from server.
                for (var i = 0; i < data.length; i++) {
                    var contyin = data[i]['county'];
                    
                    //Making html tags and puting in conty. 
                    $("#countySelect").append("<option>" + contyin + "</option>");
                }
                console.log(data);

            },
            complete: function(data, status) {
                console.log(status);
            }
            
        });

    });
    
    
    //Zip code ajax. 
    $("#zip").change(function() {

        $.ajax({
            type: "get",
            url: "http://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php",
            dataType: "json",
            data: {
                //Adding zip to url. 
                "zip": $("#zip").val(),
            },

            success: function(data) {
                
                //Reading city, latitude and longitude from jeason file.  
                $("#city").html("City: " + `${data.city}`);
                $("#latitude").html("Latitude: " + `${data.latitude}`);
                $("#longitude").html("Longitude: " + `${data.longitude}`);
                
                //If zip is wrong
                if (data == false) {

                    $("#zipError").html("Zip code not found").css({ "color": "#dc3545" });
                    $("#zip").css({ "border-color": "#dc3545" });
                
                //If zip is right. 
                }else{
                    
                   $("#zipError").html("").css({ "color": "#28a745" });
                   $("#zip").css({ "border-color": "#28a745" });
                }
            },
            
            //function for looking for errors. If the zip not is found. 
            error: function(xhr) {
                if (xhr) {
                    $("#zipError").html("Zip code not found").css({ "color": "#dc3545" });
                    $("#zip").css({ "border-color": "#dc3545" });
                }
                
            },

            complete: function(data, status) {
                console.log(status);
            }
        });
    });
    
    
    //Username ajax 
    $("#newUserName").change(function() {
        
        $.ajax({    
                    //Geting a list with username. 
                    type: "get",
                    url: "apiusername.php",
                    dataType: "json",
                    data: {},
                    success: function(data) {
                    console.log(data)
                    
                    //Retriving username from html input. 
                    var userNameNew = $("#newUserName").val();
                    
                    //If check with for loop going true the list from server. Comparing the username. 
                        for (i = 0; i < data.length; i++) {
                            var name = data[i];
                            if (userNameNew == name) {
                                
                                //Seting color and writing out a string. 
                                $("#available").html("Username is not available!").css({ "color": "#dc3545" });
                                $("#newUserName").css({ "border-color": "#dc3545" });
                                break;
                            }
                            else {
                                $("#available").html("Username is available!").css({ "color": "#28a745" });
                                $("#newUserName").css({ "border-color": "#28a745" });
                            }
                        }
                    },
                    error: function(err) {
                        console.log(arguments);  
                    },
                    complete: function(data, status) { //optional, used for debugging purposes
                        console.log(status);
                    }
                });
                
    });
    
    //Password ajax 
    $("#newUserName").change(function() {
        
        $.ajax({    
                //Retriving the password from server. 
                type: "get",
                url: "apipassword.php",
                dataType: "json",
                data: {},
                success: function(data) {
                    console.log(data);
                        
                    //Placing password inn html. 
                    $("#password1").val(data);
                    $("#password2").val(data);  
                    
                    },
                    error: function(err) {
                        console.log(arguments);  
                    },
                    complete: function(data, status) { //optional, used for debugging purposes
                        console.log(status);
                    }
                });
                
    });
    
    //POST username and passord selected. 
     $('#button').click(function(e) {
         
         //Retriving values from password id. 
        var password1 = $("#password1").val();
        var password2 = $("#password2").val();
        $.ajax({
              
            type: "POST",
            url: "apicheck.php",
            dataType: "json",
            data: {"password": $('#password1').val(), "username": $('#newUserName').val()},
            success: function(data) {
                
                //if to cover username in password, not matching password and matching password. 
                if(data == false){
                           
                            $("#passW").html("Username is in Password").css({ "color": "#dc3545" });
                            $("#password1").css({ "border-color": "#dc3545" });
                            $("#password2").css({ "border-color": "#dc3545" }); 
                            
                        }else if (password1 != password2) {
                            
                            $("#passW").html("Password is not matching").css({ "color": "#dc3545" });
                            $("#password1").css({ "border-color": "#dc3545" });
                            $("#password2").css({ "border-color": "#dc3545" });
                        
                        }else{
                            $("#passW").html("Password is matching").css({ "color": "#28a745" });
                            $("#password1").css({ "border-color": "#28a745" });
                            $("#password2").css({ "border-color": "#28a745" });
                        }  
            },
            error: function(err) {
                console.log(arguments);  
            },
            complete: function(data, status) {
                
              // Called success or error
              console.log(arguments);
              console.log(status);
            }
        });
       
    });
    
});
