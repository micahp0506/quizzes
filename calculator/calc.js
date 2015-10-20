
/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function toMultiply (number1, number2) {
	return number1*number2;
	
}
/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function toAdd (number1, number2) {
	return number1 + number2;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function toSubtract (number1, number2) {
	return number1 - number2;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function toDivide (number1, number2) {
	return number1 / number2;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them


  Return the value of the operation.
 */
 function calculation(number1, number2, operation) {
 	console.log(operation)
 	return operation(number1, number2);
 }

document.getElementById("add").addEventListener("click", function(event) {
	// Getting first number
	var number1 = document.getElementById("number1").value;
	// Getting second number
	var number2 = document.getElementById("number2").value;
	// Performing the calculation
	var result = calculation(number1, number2, toAdd)
	document.getElementById("output").innerHTML = result;
});



document.getElementById("multiply").addEventListener("click", function(event) {
	// Getting first number
	var number1 = document.getElementById("number1").value;
	// Getting second number
	var number2 = document.getElementById("number2").value;
	// Performing the calculation
	var result = calculation(number1, number2, toMultiply)
	document.getElementById("output").innerHTML = result;
});

 

document.getElementById("subtract").addEventListener("click", function(event) {
	// Getting first number
	var number1 = document.getElementById("number1").value;
	// Getting second number
	var number2 = document.getElementById("number2").value;
	// Performing the calculation
	var result = calculation(number1, number2, toSubtract)
	document.getElementById("output").innerHTML = result;
});


document.getElementById("divide").addEventListener("click", function(event) {
	// Getting first number
	var number1 = document.getElementById("number1").value;
	// Getting second number
	var number2 = document.getElementById("number2").value;
	// Performing the calculation
	var result = calculation(number1, number2, toDivide)
	document.getElementById("output").innerHTML = result;
});

// var multiply = document.getElementById("multiply");
// multiply.addEventListener("click", toMultiply);

// var add = document.getElementById("add");
// add.addEventListener("click", toAdd);

// var subtract = document.getElementById("subtract");
// subtract.addEventListener("click", toSubtract);

// var divide = document.getElementById("divide");
// divide.addEventListener("click", toDivide);

// document.getElementById("output") = calculation().innerHTML;
