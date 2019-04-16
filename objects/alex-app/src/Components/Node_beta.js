class Node {
	constructor (subject, amount){
		this.forewardNode = null
		// this.previousNode = null
		this.subject= subject
		this.amount= amount
		}
	}

class LinkedList{
	constructor (){
		this.head=null
		this.numberOfNodes = 0
	}

	insertAtBegining = (subject, amount) => {
		let newNode = new Node (subject, amount)
		newNode.forewardNode = this.head
		this.head = newNode
		this.numberOfNodes++
		return this.head
	}

	insertAtEnd = (subject, amount) => {
		let newNode = new Node (subject, amount)
		if (this.head === null){
			this.head = newNode
			this.numberOfNodes++
			return this.head
		} else {
			let tail = this.head
			while (tail.forewardNode !== null) {
				tail=tail.forewardNode
			}
			tail.forewardNode = newNode;
			this.numberOfNodes++
			return this.head
		}
	}

	getAt = (index) => {
		let counter = 0
		let node = this.head
		while (node) {
			if (counter === index) {
				return node
			}
			counter++
			node = node.forewardNode
		}
		return null
	}

	insertAt = (subject, amount, index) => {
		// if the list is empty
		if (this.getAt(index) === null){
			console.log ("there are only " + this.numberOfNodes +" nodes in the list")
			console.log ("new node not inserted!")
			console.log ("try again")
		}else if (this.head === null){
			this.head = new Node(subject, amount)
			this.numberOfNodes++
			return;
		//if you have to insert at the begining
		} else if (index === 0){
			let newNode = new Node (subject, amount)
			newNode.forewardNode = this.head
			this.head = newNode
			this.numberOfNodes++
			return;
		//insert at a certain location
		} else {
			const previous = this.getAt(index-1)
			let newNode = new Node(subject, amount)
			newNode.forewardNode=previous.forewardNode
			previous.forewardNode=newNode
			this.numberOfNodes++
			return this.head
		}
	}

	deleteLastNode = () => {
		if (this.numberOfNodes === 0){
			console.log ("no elements in the list")
			return null
		} else if (this.numberOfNodes === 1){
			this.head= null
			this.numberOfNodes--
			return this.head
		}  else {
		const beforeLastNode = this.getAt (this.numberOfNodes-2)
		// console.log ("before last node= ", beforeLastNode)
		// console.log ("last node =", this.getAt(this.numberOfNodes-1))
		beforeLastNode.forewardNode = null
		this.numberOfNodes--
		// console.log ("new last node", this.getAt(this.numberOfNodes-1))
		return this.head
		}
	}  

	// deleteNode = (index) => {
	// 	if (this.numberOfNodes === 0){
	// 		console.log ("no elements in the list")
	// 		return null
	// 	} 

	// 	if(this.getAt(index)=== null) {
	// 		console.log ("there are only " + this.numberOfNodes +" nodes in the list")
	// 		console.log ("try again")
	// 	} 
	// 	if (index === 1) {
 //        	this.head = this.head.forewardNode;
 //        	return;
 //    	} 
    	
 //    	const previous = this.getAt(index - 1);
    
 //    	if (!previous || !previous.forewardNode) {
 //   		     return;
 //    	}
    
 //    	previous.forewardNode = previous.forewardNode.forewardNode;     
 //    	return this.head
 //   	}  

	deleteFirstNode = () => {
		// console.log (this.head)
		if (this.numberOfNodes === 0){
			console.log ("no elements in the list")
			return null
		} else if (this.numberOfNodes === 1){
			this.head= null
			this.numberOfNodes--
			return this.head
		}  else {
		this.head = this.head.forewardNode
		// console.log (this.head)
		this.numberOfNodes--
		return this.head
		}
	}
}



let list = new LinkedList()
list.insertAtBegining("a",1)
list.insertAtBegining("b",2)
list.insertAtBegining("c",3)
list.insertAtBegining("d",4)
list.insertAtBegining("e",5)

export {Node, LinkedList}
	