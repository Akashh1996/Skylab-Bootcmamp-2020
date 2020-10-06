<!DOCTYPE html>
<html>
<head>
</head>
<body>

<script>
	
	var ArrayResults = [];

	 var num1 = prompt("numero 1");
	 var num2 = prompt("numero 2");
	 
	 num1 = parseInt(num1);
	 num2 = parseInt(num2);
	
    if(isNaN(num2) || isNaN(num1)){
        if (!isNaN(num2)){
			squareroot(num2);
		}
		else if (!isNaN(num1)){
			squareroot(num1);
		}
	}
    else{
	
	
        ArrayResults.push(sum(num1,num2));
        ArrayResults.push(subtract(num1,num2));
        ArrayResults.push(multiplication(num1,num2));
        ArrayResults.push(divide(num1,num2));
    }
	
	
	function sum(num1, num2){
	let result;
	result = num1 + num2;
	confirm(num1 + " + " + num2 + " = " + result);
	return(parseFloat(result).toFixed(3));
	}

	function subtract(num1, num2){
	let result;
	result = num1 - num2;
	confirm(num1 + " - " + num2 + " = "  + result);
	return(parseFloat(result).toFixed(3));
	}

	function multiplication(num1, num2){
	let result;
	result = num1 * num2;
	confirm(num1 + " * " + num2 + " = " + result);
	return(parseFloat(result).toFixed(3));
	}

	function divide(num1, num2){
	let result;
	result = num1 / num2;
	confirm(num1 + " / " + num2 + " = "+ result);
	return(parseFloat(result).toFixed(3));
	}

	function squareroot(num1){
		let result;
		result = Math.sqrt(num1);
		confirm("the square root is "+ result);
		return(parseFloat(result).toFixed(3));
	}
</script>

</body>
</html>