
if (1===1)
{	console.log("Hello World from basic.js");
 }

let i=0;
document.getElementById("buttonId").addEventListener("click",onButtonClicked);

function onButtonClicked() {
 	console.log ("I\'m in the button click event " + i);
 	let inputFieldValue = document.getElementById("inputField").value;
 	let n = Number (inputFieldValue);
 	if (isNaN(n)==true){
 		alert ("Please try again!!! your entry is not number!!! ENTER A NUMBER!!!");
 		
 	} else {
 		console.log (inputFieldValue);
 		console.log (Number(inputFieldValue)+1);
 	}		
 }

//Calulator code//
document.getElementById("add").addEventListener("click",onButtonMath);
document.getElementById("substruct").addEventListener("click",onButtonMath);
document.getElementById("multiply").addEventListener("click",onButtonMath);
document.getElementById("divide").addEventListener("click",onButtonMath);
 
function onButtonMath(e) {
	let num1 = Number(document.getElementById("firstNumber").value);
	let num2 = Number(document.getElementById("secondNumber").value);

	if (e.target.getAttribute("func")=== "+"){
		let a = num1 + num2;
		document.getElementById("result").value = a;
	} else if (e.target.getAttribute("func")=== "-") {
		let a = num1-num2;
		document.getElementById("result").value = a;
	} else if (e.target.getAttribute("func")=== "x") {
		let a = num1*num2;
		document.getElementById("result").value = a;
	} else {
		let a = num1/num2;
		document.getElementById("result").value = a;
	} 
}






//TAX Calulator code//
document.getElementById("tax").addEventListener("click",onButtonTax);

function onButtonTax() {
	const percentage = [0.15, 0.205, 0.26, 0.29, 0.33];
	const taxAmount = [0, 7145, 16908, 30535, 48719];
	const incomeBraket = [0,47630, 95259, 147667, 210371] ;
	const income = Number(document.getElementById("income").value);
	let i = 0;
	let tax = 0;
	while (income > Number(incomeBraket[i])){
		i++;
	}
	i--;
	tax = (income - Number(incomeBraket[i]))*Number(percentage[i])+Number(taxAmount[i]);
	document.getElementById("pay").value = tax;
}
































//Working with arrays
document.getElementById("newElement").addEventListener("click",onButtonArray);
document.getElementById("showArray").addEventListener("click",onButtonArray);
document.getElementById("totalling").addEventListener("click",onButtonArray);
document.getElementById("clear").addEventListener("click",onButtonArray);
let numberArray = []; 

function onButtonArray(e) {
	let num1 = Number(document.getElementById("element").value);

	if (e.target.getAttribute("func")=== "new"){
		numberArray.push(num1);
		console.log(numberArray);
	} else if (e.target.getAttribute("func")=== "show") {
		document.getElementById("display").textContent = numberArray;
		console.log(numberArray);
	} else if (e.target.getAttribute("func")=== "tot") {
		let arrayLength = numberArray.length;
		let sum = 0;
		while (i <arrayLength) {
			sum = sum + Number(numberArray[i]);
			i++;
		}
		document.getElementById("display").textContent = sum;
	} else if (e.target.getAttribute("func")=== "clear") {
		numberArray=[];
		console.log(numberArray);
	}else {
		return 1;
	} 
}


//Working With Dictionaries
let provinces = {
	ab: "Alberta",
	bc: "Brithish Columbia",
	mb: "Manitoba",
	nb: "New Brunswick",
	nl: "Newfoundland and Labrador",
	ns: "Nova Scotia",
	on: "Ontario", 
	pe: "Prince Edward Island",
	qc: "Quebec",
	sk: "Saskatchewan",
}

document.getElementById("lookup").addEventListener("click",onButtonSearch);

function onButtonSearch() {
	let shortProv = Object.keys(provinces);
	let noResult = true;
	let prov = document.getElementById("searchBar").value;
	prov = prov.toLowerCase();
	let i = 0;
	while (i < shortProv.length){
		if (prov === shortProv[i]){
			let p = shortProv[i];
			document.getElementById("display2").textContent = provinces[p];
			noResult = false;
			i = shortProv.length;
		} else {
			i++;
		}
	if (noResult === true)
		document.getElementById("display2").textContent = "No Such Province in Canada! Try Again!";
	}
	
}
