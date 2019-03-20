
/*	
	Write the function to format an email based on an object / map
*/

const makeEmailObj = (obj) => {
	return (`${obj.fname}.${obj.lname}@evolveu.ca`)
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

makeEmailObj({fname:'bill',lname:'smith'})
// Write the function after this comment ---

// and before this comment ---

const objLarry = {fname:'larry', lname:'shumlich'};
assertEquals('larry.shumlich@evolveu.ca', makeEmailObj(objLarry));
assertEquals('bill.smith@evolveu.ca', makeEmailObj({fname:'bill',lname:'smith'}));
assertEquals('amy.jones@evolveu.ca', makeEmailObj({fname:'amy',lname:'jones'}));
