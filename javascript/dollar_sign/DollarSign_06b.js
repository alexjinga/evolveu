const People = [
	{name: "Alex", age: 5},
	{name: "Gio", age: 6},
	{name: "Roman", age: 15},
	{name: "Tylor", age: 24},
	{name: "Faith", age: 17},
	{name: "Jawad", age: 33},
]


function totAge (a){
	let ageSum = (a.reduce((b,c) => ({age: b.age + c.age})))
	return (ageSum.age)
}

// function totAge (a){ 
// 	let ages = (a.reduce((acum, curVal) => age: acum.age + curVal.age))
// 	console.log(ages.age)
// }

console.log(totAge(People))

const avgAge = (a) => {	
	return (totAge(a) / a.length)
}

console.log(avgAge(People))

function assertEquals (arr1, arr2){
	if (arr1 !== arr2) {
		console.log ('*** the two values are not the same:')
		console.log ('    p1 --> ', arr1)
		console.log ('    p2 --> ', arr2)
		return 0
	}
	console.log("    ok --> " , arr1)	
}

assertEquals(totAge(People), 100)
assertEquals(avgAge(People), 20)
