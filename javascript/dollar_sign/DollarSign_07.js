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

function assertEquals (arr1, arr2){
	if (arr1 !== arr2) {
		console.log ('*** the two values are not the same:')
		console.log ('    p1 --> ', arr1)
		console.log ('    p2 --> ', arr2)
		return 0
	}
	console.log("    ok --> " , arr1)	
}

//-----------------------------------------------------

const loopWithEach = (a) => {
	const newArray = []
	a.forEach((element) => {
		newArray.push(makeEmailObj(element))
	})
	return newArray
} 

console.log('-----emailWithEach')
const emailWithEach = loopWithEach(data.staff);
// console.log(emailWithEach);
assertEquals('Jane.Smith@evolveu.ca', emailWithEach[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithEach[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithEach[6]);

//------------------------------------------------------

const loopWithMap = (obj) => {
	// console.log (obj)
	const mapArray = obj.map(item => makeEmailObj(item))
	return (mapArray)
}

console.log('-----emailWithMap')
const emailWithMap = loopWithMap(data.staff);
// console.log(emailWithMap);
assertEquals('Jane.Smith@evolveu.ca', emailWithMap[0]);
assertEquals('Olivia.Notly@evolveu.com', emailWithMap[3]);
assertEquals('Benjamin.Amis@evolveu.ca', emailWithMap[6]);
