$(document).ready(function(){
	
	var img1count = 0; 
	var img2count = 0;
	var img3count = 0;
	var img4count = 0;
	var img5count = 0;
	var img6count = 0;

   $('.quiz1').click(function(){
	    
	   var valueOfQuiz1 = $('#Cycling').prop('checked');
		
		$('.quiz1 input').attr('disabled','disabled');
		
	 if(valueOfQuiz1 == true && img1count == 0){
		
		$('#img1').prepend('<img src="img/ok.jpg"/>'); 
		
		img1count++;
		
	}else if(valueOfQuiz1 == false && img1count == 0){
		
		$('#img1').prepend('<img src="img/notmark.png"/>');
		
		img1count++;
	}
	
	
	});
		
   $('.quiz2').click(function(){
	   
	  
	  var valueOfQuiz2 = $('#1903').prop('checked');
	  $('.quiz2 input').attr('disabled','disabled');
	  
	  if(valueOfQuiz2 == true && img2count == 0){
		
		$('#img2').prepend('<img src="img/ok.jpg"/>');
		
		img2count++;
			
		}else if(valueOfQuiz2 == false && img2count == 0){
		
		$('#img2').prepend('<img src="img/notmark.png"/>');
		
		img2count++;
		}
	
   });
   
    $('.quiz3').click(function(){
		$('.quiz3 input').attr('disabled','disabled');
      var valueOfQuiz3 = $('#France').prop('checked');
	  
	  if(valueOfQuiz3 == true && img3count == 0){
		
		$('#img3').prepend('<img src="img/ok.jpg"/>');
			
			img3count++;
			
		}else if(valueOfQuiz3 == false && img3count == 0){
		
		$('#img3').prepend('<img src="img/notmark.png"/>');
		
			img3count++; 
			
		}
   });
   
    $('.quiz4').click(function(){
		 $('.quiz4 input').attr('disabled','disabled');
      var valueOfQuiz4 = $('#GeraintThomas').prop('checked');
	 
	  if(valueOfQuiz4 == true && img4count == 0){
		
		$('#img4').prepend('<img src="img/ok.jpg"/>');
			
			img4count++;
			
		}else if(valueOfQuiz4 == false && img4count == 0){
		
		$('#img4').prepend('<img src="img/notmark.png"/>');
		
		img4count++;
		
	  }	
   });
   
    $('.quiz5').click(function(){
		 $('.quiz5 input').attr('disabled','disabled');
      var valueOfQuiz5 = $('#69kg').prop('checked');
	  
	   if(valueOfQuiz5 == true && img5count == 0){
		
			img5count++;
			
		$('#img5').prepend('<img src="img/ok.jpg"/>');
		
		}else if(valueOfQuiz5 == false && img5count == 0){
			
			img5count++;
			
		$('#img5').prepend('<img src="img/notmark.png"/>');
		
		}
      
   });
   
    $('.quiz6').click(function(){
		 $('.quiz6 input').attr('disabled','disabled');
      var valueOfQuiz6 = $('#6july').prop('checked');
	  
	   if(valueOfQuiz6 == true && img6count == 0){
			
			img6count++;
			
		$('#img6').prepend('<img src="img/ok.jpg"/>');
		
		}else if(valueOfQuiz6 == false && img6count == 0){
		
			img6count++; 
			
		$('#img6').prepend('<img src="img/notmark.png"/>');
		
		}
   
   });
   
	
	$('#mainQuiz').click(function(){
		var count = 0; 
		
		if(($('#Cycling').prop('checked')) == true){
			count++; 
		}
		if(($('#1903').prop('checked')) == true){
			count++;
		}
		if(($('#France').prop('checked')) == true){
			count++;
		}
		if(($('#GeraintThomas').prop('checked')) == true){
			count++;
		}
		if(($('#69kg').prop('checked')) == true){
			count++;
		}
		if(($('#6july').prop('checked')) == true){
			count++;
		}
		
		if(count == 0){
			
			$('#win').html('<h2>You got 0% correct!</h2>');
			
		}else if(count == 1){
		
			$('#win').html('<h2>You got 17% correct!</h2>');
			
		}else if(count == 2){
		
			$('#win').html('<h2>You got 34% correct!</h2>');
			
		}else if(count == 3){
			
			
			$('#win').html('<h2>You got 51% correct!</h2>');
			
		}else if(count == 4){
			
	 
			$('#win').html('<h2>You got 68% correct!</h2>');
			
		}else if(count == 5){
			 
			$('#win').html('<h2>You got 85% correct!</h2>');
			
		}else if(count == 6){
			
			/*90% would be 5.4 of the answer. It was a bit difficult. I put 90% to 6 score with 100% of the answers right*/
			$('main').css('background-image', 'url(img/sagan.jpg)'); 
			$('#win').html('<h2>You got above 90% you got 100% correct!</h2>');
		}
		
		$('#reset').click(function() {
		location.reload();
		});
	});
 });