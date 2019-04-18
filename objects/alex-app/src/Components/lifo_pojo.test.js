import LIFO from './lifo_pojo.js'

test ('LIFO class from lifo_pojo.js', () => {

	let arr = ["item 1", "item 2", "item 3", "item 4", "item 5"]
	const arrLIFO = new LIFO(["item 1", "item 2", "item 3", "item 4", "item 5"])

	console.log ('creating and testing a LIFO obj:')
	expect (arrLIFO.elements).toMatchObject(arr)

	console.log ('adding an element in the Stack:')
	arr.unshift("item 6")
	arrLIFO.addToStack("item 6")
	expect (arrLIFO.elements).toMatchObject(arr)	

	console.log ('removing an element in the queue:')
	arr.shift()
	arrLIFO.removeFromStack()
	expect (arrLIFO.elements).toMatchObject(arr)	



})