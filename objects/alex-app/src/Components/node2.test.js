import data from './LinkedListElements.json'
import {Node2, LinkedList2} from './Node2.js'

test ('Node class from Node.js', () => {

	//testing the NODE class constructor		
	console.log ('creating and testing a node object:')
	const obj = {
		subject : "aa",
		amount : 1,
		next : null,
		prev : null
	}
	const newNode = new Node2 ("aa" , 1)
	expect(newNode).toMatchObject(obj) 
	
	//test Node.Show() method
	console.log ('testing a node.show() method:')
	expect(newNode.show()).toMatchObject([0,"aa",1])



	//testing the LINKEDLIST Class Constructor
	console.log ('creating and testing a LinkedList object:')
	const newList = new LinkedList2 ()
	console.log("newList=",newList)
	const headNode = new Node2 ("HEAD","")
	const tailNode = new Node2 ("TAIL","")
	expect(newList.head).toMatchObject(headNode)
	expect(newList.tail).toMatchObject(tailNode)

	//testing insert() method
	console.log ("testing insert() method:")
	const obj2 = new Node2 ("bb",2)
	obj2.next = tailNode
	obj2.prev = headNode
	headNode.next = obj2
	tailNode.prev = obj2
	const a = newList.insert("bb",2)
	console.log("a=",a)
	console.log("obj2=",obj2)
	expect(a.subject).toBe(obj2.subject)

	//testing importList() method
	console.log ("testing importList() method:")
	console.log("initial number of nodes",newList.numberOfNodes)
	newList.importList(data)
	expect(newList.numberOfNodes).toBe(6)
	console.log("new number of nodes",newList.numberOfNodes)
	console.log ("linked list=",newList)
	

	//testing first() method
	console.log ("testing first() method:")
	newList.first()
	expect(newList.currentNode).toBe(newList.head.next)

	//testing last() method
	console.log ("testing last() method:")
	newList.last()
	console.log("last element:",newList.currentNode)
	expect(newList.currentNode).toBe(newList.tail.prev)

	//test next() method
	console.log ("testing next() method:")
	newList.first()
	console.log("current Node location 1:",newList.currentNode)
	newList.next()
	console.log("current Node location 2:",newList.currentNode)
	expect(newList.currentNode).toBe(newList.head.next.next)
	newList.next()
	console.log("current Node location 3:",newList.currentNode)
	expect(newList.currentNode).toBe(newList.head.next.next.next)

	//test previous() method 
	console.log ("testing previous() method:")
	newList.previous()
	console.log("current Node loc -1 ", newList.currentNode)
	expect(newList.currentNode).toBe(newList.head.next.next) 
	newList.previous()
	console.log("current Node loc -2 ", newList.currentNode)
	expect(newList.currentNode).toBe(newList.head.next) 

	//test delete() method
	console.log ("testing delete() method:")
	newList.next()
	newList.next()
	expect(newList.currentNode).toBe(newList.head.next.next.next)
	console.log("current Node to delete ", newList.currentNode)
	newList.delete()
	expect(newList.currentNode).toBe(newList.head.next.next)

	//test Total() method 
	console.log ("testing total() method:")
	console.log(newList.total())
	expect(newList.total()).toBe(15)

	//test linkedListToArray() method
	console.log ("testing display() method:")
	const newList2 = new LinkedList2()
	newList2.importList(data)
	expect(newList2.linkedListToArray()).toMatchObject([
		[0,"HEAD",""], 
		[0, "node", 1], 
		[0, "node", 2], 
		[0, "node", 3], 
		[0, "node", 4], 
		[1, "node", 5],
		[0,"TAIL",""]
	])
	newList2.previous()
	newList2.linkedListToArray()

})