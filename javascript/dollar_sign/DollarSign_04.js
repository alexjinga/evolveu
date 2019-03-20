


function makeEmailArr (fname) {
	let emailArray = `${fname[0]}.${fname[1]}@evolveu.ca`
	// console.log(emailArray)
	return emailArray
}

function assertEquals (arr1, arr2){
	if (arr1 !== arr2) {
		console.log ('*** the two values are not the same:')
		console.log ('    p1 --> ', arr1)
		console.log ('    p2 --> ', arr2)
		return 0
	}
	console.log("    ok --> " , arr1)
	
}
/*	
	Write the function to format an email based on an array
*/

// Write the function after this comment ---

// and before this comment ---

const arrayLarry = ['larry', 'shumlich'];
assertEquals('larry.shumlich@evolveu.ca', makeEmailArr(arrayLarry));
assertEquals('bill.smith@evolveu.com', makeEmailArr(['bill','smith']));
assertEquals('amy.jones@evolveu.ca', makeEmailArr(['amy','jones']));








