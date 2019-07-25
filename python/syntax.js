
// define attributes / variables
//  - number
//  - string
//  - boolean
//  - array
//  - dictionary / objects 
//  - undefined 

var globalVar = 10;
let blockVar = 2;
console.log (globalVar);

var stringVar = "string";
console.log (stringVar);

var booleanVar = true;
console.log (booleanVar);

var arrayVar = ["XT", "MR2", "AW11", "GK5"];
console.log (arrayVar);

var objectVar = {
	maker: "Toyota",
	model: "MR2",
	code: "AW11",
	engine: "4A-GE",
}
console.log (objectVar);

var unidentifiedVar;
console.log (unidentifiedVar);

// sample if / else
var numberVar = prompt("enter a number smaller then 10");
if (numberVar === 10 || numberVar > 10){
	alert ("YOU ARE WRONG!!!! your number is  NOT smaller then 10");
} else {
	alert ("WELL DONE!!!!  (you can follow orders!)");
}

// functions
// 	- parameters
// 	- returns 
alert ("let's try again...");
var numberVar2 = prompt("enter a number smaller then 10");

function exampleFunction(a,b) {
	if (numberVar2 === globalVar || numberVar2 > globalVar){
		alert ("YOU ARE WRONG!!!! your number is  NOT smaller then 10");
		return numberVar2;
	} else {
		alert ("WELL DONE!!!!  (you can follow orders!)");
		return numberVar2;
	}	
}
exampleFunction (numberVar2,globalVar);

// arrays
// 	- add to the front
// 	- add to the end
// 	- update values
var newElement = prompt("type a word to add at the begining of the array: [" + arrayVar + "]");
arrayVar.unshift(newElement);
console.log (arrayVar);

var newElement = prompt ("type a word to add at the begining of the array: [" + arrayVar + "]");
arrayVar.push(newElement);
console.log (arrayVar);


// loops - for
function forLoopFunct(num,power) {
	let a = 1;
	for (i=0; i<power; i++){
		a = a * num;
	}
	return a;
}

console.log (forLoopFunct(2,6));

// loops - for/in
function forInLoopFunct (obj){
	let str = "";
	for (var properties in obj) {
		str = str + " " + obj[properties];
	}
	return str;
}
console.log (forInLoopFunct(objectVar));

// Loops- while
function whileLoopFunct(num,power) {
	let i = 0;
	let a = 1;
	while (i < power) {
		a = a * num;
		i++;
	}
	return a;
}
console.log (whileLoopFunct(2,6));

// Loops- do while
function doWhileLoopFunct(num,power) {
	let i = 0;
	let a = 1;
	do {
		a = a * num;
		i++;
	}
	while (i < power);
	return a;
}
console.log (doWhileLoopFunct(2,6));

// 	- forEach (with array and function) -->
arrayVar.forEach(function(x) {
	console.log(x);
});



//Objects / Dictionaries
	// - declare object
	// - lookup key to retrieve value
console.log (objectVar.model);