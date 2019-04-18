//QUEUE

class Fifo {
	constructor(props){
		this.elements= props
		console.log(this.elements)
	}

	addToQueue = (element) => {
		this.elements.push(element)
		console.log(this.elements)
	}

	removeFromQueue = () => {
		this.elements.shift()
		console.log(this.elements)
	}

}

export default Fifo