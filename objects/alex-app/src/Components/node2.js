//double linked list
import data from './LinkedListElements.json'

class Node2 {
	constructor(subject, amount){
		this.subject = subject
		this.amount = amount
		this.next = null // next is Larry's forwardNode
		this.prev = null
	}
	show() {
		const node = [0, this.subject, this.amount]
		return node
	}
}

class LinkedList2 {
	constructor(){
		this.head = new Node2 ("HEAD","")
		this.tail = new Node2 ("TAIL", "")
		this.numberOfNodes = 0
		this.currentNode = this.head
		// this.head.next = this.tail
		// this.tail.prev = this.head
	}

	insert = (subject, amount) => {
		const newNode = new Node2(subject,amount)
		if (this.head.next === null) {
			this.head.next = newNode
			this.tail.prev = newNode
			newNode.next = this.tail
			newNode.prev = this.head
			this.currentNode = newNode
		} else {
			newNode.next = this.currentNode.next
			newNode.prev = this.currentNode
			this.currentNode.next = newNode
			this.currentNode = this.currentNode.next.next
			this.currentNode.prev = newNode
			this.currentNode = newNode
		}
		this.numberOfNodes++
		return this.currentNode
	}

	importList = (data) => {
		data.forEach((item) =>{
			this.insert(item.subject, item.amount)
		})
		return (this.linkedListToArray())
	}

	first = () => {
		this.currentNode = this.head.next
	}

	last = () => {
		this.currentNode = this.tail.prev
	}

	next = () => {
		if (this.currentNode.next === null) {
			console.log("we reached the end of the queue")
			return null
		} else {
			this.currentNode = this.currentNode.next
		}
	}

	previous = () => {
		if (this.currentNode.prev === null){
			console.log ("you reached the Head of the List")
			return this.currentNode
		} else {
			this.currentNode = this.currentNode.prev
		}
	}

	delete = () => {
		if (this.currentNode.next === null || this.currentNode.prev===null){
			console.log ("sorry, you cannot delete the Head or the Tail")
			return null		
		} else {
			const deleteNode = this.currentNode 
			let beforeNode = this.currentNode.prev
			let afterNode = this.currentNode.next
			beforeNode.next = afterNode
			afterNode.prev = beforeNode
			this.currentNode = beforeNode
			this.numberOfNodes--
		}
	}

	linkedListToArray = () => {
		const linkedListArray = []
		let tempNode = this.head
		while (tempNode!== null){
			if(tempNode===this.currentNode){
				const a = tempNode.show()
				a[0] = 1
				linkedListArray.push(a)
			} else {
				linkedListArray.push(tempNode.show())		
			}
			tempNode = tempNode.next
		}
		// linkedListArray.push([0, "NULL", ""])
		// console.log(linkedListArray)
		return (linkedListArray)
	}
	
	total = () => { 
		let tempNode = this.head
		let sum = 0
		do{
			if (tempNode.amount === null){
				tempNode.amount=0
			}
			sum = Number(tempNode.amount) + sum
			tempNode = tempNode.next
		} while (tempNode !== null)
		console.log(sum)
		return sum
	}
}
export {Node2, LinkedList2}