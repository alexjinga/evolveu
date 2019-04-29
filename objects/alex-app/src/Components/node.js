//Single linked list

import data from './LinkedListElements.json'

class Node {
	constructor(subject, amount){
		this.subject = subject
		this.amount = amount
		this.next = null // next is Larry's forwardNode
	}
	show() {
		const node = [0, this.subject, this.amount]
		return node
	}
}

class LinkedList {
	constructor(){
		this.head = new Node ("HEAD","")
		this.numberOfNodes = 0
		this.currentNode = this.head
	}

	insert = (subject, amount) => {
		const newNode = new Node(subject,amount)
		if (this.head === null) {
			this.head = newNode
			this.currentNode = newNode
		} else {
			newNode.next = this.currentNode.next
			this.currentNode.next = newNode
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
		this.currentNode = this.head
	}

	last = () => {
		while (this.currentNode.next!== null){
			this.currentNode = this.currentNode.next
		}
	}

	next = () => {
		if (this.currentNode.next === null) {
			return null
		} else {
			this.currentNode = this.currentNode.next
		}
	}

	previous= () => {
		if (this.currentNode === this.head){
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
			return null
		} else {
			const deleteNode = this.currentNode 
			this.previous()
			this.currentNode.next = deleteNode.next
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
		return sum
	}
}
export {Node, LinkedList}