
const data = {
	staff: [
		{fname:"Jane", lname:"Smith", balance:10},
		{fname:"Liam", lname:"Henry", balance:1000},
		{fname:"Emma", lname:"Jones", balance:1330},
		{fname:"Olivia", lname:"Notly", balance:310},
		{fname:"Noah", lname:"Ho", balance:503},
		{fname:"William", lname:"Lee", balance:520},
		{fname:"Benjamin", lname:"Amis", balance:150},
	],
	company: "EvolveU",
	city: "Calgary",
	prov: "Alberta"
};

const makeEmailObj = (obj) => {
	return (`${obj.fname}.${obj.lname}@evolveu.ca`)
}

const loopStaff = (a) => {
	const newArray = []
	a.forEach((element) => {
		newArray.push(makeEmailObj(element))
	})
	return newArray
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
// Write the function after this comment ---

// and before this comment ---

console.log('-----loopStaff')
const staffEmail = loopStaff(data.staff)
console.log(staffEmail)

assertEquals('Jane.Smith@evolveu.ca', staffEmail[0])
assertEquals('Olivia.Notly@evolveu.com', staffEmail[3])
assertEquals('Benjamin.Amis@evolveu.ca', staffEmail[6])



