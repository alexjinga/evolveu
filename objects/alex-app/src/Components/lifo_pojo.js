//Stack

class Lifo {
	constructor(props){
		this.elements= props
		console.log(this.elements)
	}

	addToStack = (element) => {
		this.elements.unshift(element)
		console.log(this.elements)
	}

	removeFromStack = () => {
		this.elements.shift()
		console.log(this.elements)
	}

}

export default Lifo