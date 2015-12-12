var module = module || {};

// $(document).ready(function() { 




	// $("#submit").click(function() {
	// 	var input = $("#input").val();
	// 	console.log("click", input);
	// 	checkWordCount(input);
	// 	duplicateCheck(input);
	// 	verifyAlphaNumeric(input);
	// });

	function checkWordCount(input) {
		console.log("check", input);
		var output = input.split(" ").length;
		console.log(output);
		if (output < 100) {
			return output;
		} else {
			alert("You have enetered too many words");
		}
	}

	function duplicateCheck(input) {
		var arr = input.split(" ");
		console.log("arr", arr);
		var unique = $.unique(arr);
		arr = unique.join(" ");
		console.log("arr", arr);
		return arr;
		
	}

	function verifyAlphaNumeric(input) {
		var outString = input.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
		console.log("outString", outString);
		return outString;
	}



module.exports = { checkWordCount, duplicateCheck, verifyAlphaNumeric};
// });