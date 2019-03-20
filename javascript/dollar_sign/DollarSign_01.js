console.log("Hello from exercises")
const array1 = [3,1]
console.log (array1)

function orderArray (arr){
	if (arr[0] <= arr[1]){
		return arr
	} else {
		const a = arr[0]
		arr[0]=arr[1]
		arr[1]=a
		return arr
	}
}

console.log("Should Be: 1, 3:", 
	orderArray(array1));

console.log("Should Be: 1, 5:", 
	orderArray([1, 5]));


console.log("Should Be: 10, 20:", 
	orderArray([20, 10]));
 console.log ("test")
