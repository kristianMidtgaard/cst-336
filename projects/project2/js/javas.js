$(document).ready(function(){
	

   $('#submit').click(function(){
	   
	   
	   $('#firsN').html("First name: " + $('#firstName').val());
	   $('#surN').html("Surname: " + $('#surname').val());
	   
	   var valueMan = $('#man').prop('checked');
	   var valueWoman = $('#woman').prop('checked');
	   var valueOther = $('#other').prop('checked');
	   var valueOtter = $('#otter').prop('checked');
		
		if(valueMan == true){
			
			$('#outGender').html("Gender: Man");
			
		}else if(valueWoman == true){
			
			$('#outGender').html("Gender: Woman");
			
		}else if(valueOther == true){
			
			$('#outGender').html("Gender: Other: " + $('#otherInfo').val());
			
		}else if(valueOtter == true){
			
			$('#outGender').html("Gender: CSUMB student " + $('#otter').val());
			
		}
		
		 $('#outFrom').html("From date: " + $('#fromDate').val());
		 $('#outTo').html("From date: " + $('#toDate').val());
	});
		
});
	
	document.getElementById("submit").onclick = go; 
	
	function go(){
		 
		var valueFromList = document.getElementById("car");
		var valueCar = valueFromList.options[valueFromList.selectedIndex].text;
		document.getElementById("outCar").innerHTML = "Car type: " + valueCar; 
		
	}
	
 
	
	

	