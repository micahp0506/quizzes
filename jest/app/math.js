// function sum(one, two) {
//   return one + two;
// }

// function difference(one, two) {
// 	return one - two;
// }

// function product(one, two) {
// 	return one * two;
// }

// function quotient(one, two) {
// 	return one / two;
// }

function checkWordCount(input) {
	if (input.split(' ').length < 100) {
		return true;
	} else {
		return false;
	}
}

function duplicateCheck(input) {
    for (var i = 0; i < input.length; i++) {
        for (var j = 0; j < text.length; j++) {
            if (i != j) {
                if (input[i] == input[j]) {
                        return false; 
                }
            }
        }
    }
    return true; 
}

function verifyAlphaNumeric(input) {
	if (/^[a-z0-9]+$/i) {
		return false;
	} else {
		return true;
	}
	
}

module.exports = { checkWordCount, duplicateCheck, verifyAlphaNumeric};