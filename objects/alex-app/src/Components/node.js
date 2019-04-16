import data from './LinkedListElements.json'

class Node {
	constructor(subject, amount){
		this.subject = subject
		this.amount = amount
		this.next = null // next is Larry's forwardNode
	}
}

class LinkedList {
	constructor(){
		this.head = null
		this.numberOfNodes = 0
		this.currentNode = this.head
	}

	insert = (subject, amount) => {
		const newNode = new Node(subject,amount)
		if (this.head === null) {
			this.head = newNode
			this.currentNode = newNode
		} else {
			this.currentNode.next = newNode
			this.currentNode = this.currentNode.next
		}
		this.numberOfNodes++
		return this.currentNode
	}

	importList = (data) => {
		data.forEach((item) =>{
			this.insert(item.subject, item.amount)
		})
	}

	first = () => {
		this.currentNode = this.head
	}

	last = () => {
		while (this.currentNode.next!== null){
			// console.log(tempNode)
			this.currentNode = this.currentNode.next
		}
	}

	next = () => {
		if (this.currentNode.next === null) {
			console.log("we reached the end of the queue")
			// return this.curentNode
			return null
		} else {
			this.currentNode = this.currentNode.next
		}
	}

	previous= () => {
		if (this.currentNode === this.head){
			console.log ("you reached the Head of the List")
			return null
		} else {
			let previousNode = this.head 
			while (previousNode.next !== this.currentNode){
				previousNode = previousNode.next
			}
			this.currentNode = previousNode
		}
	}

	delete = () =>{
		if (this.currentNode === this.head){
			console.log ("sorry, you cannot delete the Head")
			return null
		} else {
			const deleteNode = this.currentNode 
			this.previous()
			this.currentNode.next = deleteNode.next
			this.numberOfNodes--
		}
	}

	displayList = () => {
		const tempNode = this.head
		console.log("the link list contains:")
		console.log("HEAD")
		while (tempNode.next!== null){
			console.log(tempNode)
			tempNode = tempNode.next
		}
	}
	
	total = () => { 
		let tempNode = this.head
		let sum = 0
		do{
			sum = tempNode.amount + sum
			tempNode = tempNode.next
		} while (tempNode !== null)
		console.log(sum)
		return sum
	}
}
export {Node, LinkedList}