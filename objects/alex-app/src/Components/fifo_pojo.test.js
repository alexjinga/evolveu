import FIFO from './fifo_pojo.js'

test ('FIFO class from fifo_pojo.js', () => {

	let arr = ["item 1", "item 2", "item 3", "item 4", "item 5"]
	const arrFIFO = new FIFO(["item 1", "item 2", "item 3", "item 4", "item 5"])

	console.log ('creating and testing a FIFO obj:')
	expect (arrFIFO.elements).toMatchObject(arr)

	console.log ('adding an element in the queue:')
	arr.push("item 6")
	arrFIFO.addToQueue("item 6")
	expect (arrFIFO.elements).toMatchObject(arr)	

	console.log ('removing an element in the queue:')
	arr.shift()
	arrFIFO.removeFromQueue()
	expect (arrFIFO.elements).toMatchObject(arr)	



})