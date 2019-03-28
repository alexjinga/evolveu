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

const nameAge = [
   { name: "Moe", age: 20 },
   { name: "Larry", age: 25 },
   { name: "Curley", age: 15 },
   { name: "Shemp", age: 35 },
   { name: "Joe", age: 12 }
]

const makeEmailObj = (obj) => {
	return (`${obj.fname}.${obj.lname}@evolveu.ca`)
}

// function assertEquals (arr1, arr2){
// 	if (arr1 !== arr2) {
// 		console.log ('*** the two values are not the same:')
// 		console.log ('    p1 --> ', arr1)
// 		console.log ('    p2 --> ', arr2)
// 		return 0
// 	}
// 	console.log("    ok --> " , arr1)	
// }

const totalBalance = (obj) => {
	const finalBalance = obj.reduce(
		(acumulator, currentValue)=> ({balance: acumulator.balance + currentValue.balance}))
	return finalBalance.balance
}

const totalAge = (obj) => {
	const finalAge = obj.reduce(
		(acumulator, currentValue)=> ({age: acumulator.age + currentValue.age}))
	return finalAge.age
}

const averageAge = (avrgAge, numberOfElements) => {
	return (avrgAge/numberOfElements)
}

console.log("total balance is = ", totalBalance(data.staff))
console.log("total ages is = ", totalAge(nameAge))


console.log("average ages is = ", averageAge(totalAge(nameAge),nameAge.length))