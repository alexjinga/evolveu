import data from './LinkedListElements.json'
import {Node, LinkedList} from './Node.js'

test ('Node class from Node.js', () => {

	//testing the NODE class constructor		
	console.log ('creating and testing a node object:')
	const obj = {
		subject : "aa",
		amount : 1,
		next : null
	}
	const newNode = new Node ("aa" , 1)
	expect(newNode).toMatchObject(obj) 
	
	//testing the LINKEDLIST Class Constructor
	console.log ('creating and testing a LinkedList object:')
	const newList = new LinkedList ()
	const linkObj = {
		head : null,
	}
	expect(newList).toMatchObject (linkObj)

	//testing insert() method
	console.log ("testing insert() method:")
	const obj2 = {
		subject : "bb",
		amount : 2,
		next : null
	}
	expect(newList.insert("bb",2)).toMatchObject(obj2)

	//testing importList() method
	console.log ("testing importList() method:")
	console.log("initial number of nodes",newList.numberOfNodes)
	newList.importList(data)
	expect(newList.numberOfNodes).toBe(6)
	console.log("new number of nodes",newList.numberOfNodes)
	

	//testing first() method
	console.log ("testing first() method:")
	newList.first()
	expect(newList.currentNode).toMatchObject(newList.head)

	//testing last() method
	console.log ("testing last() method:")
	newList.last()
	console.log("last element:",newList.currentNode)
	expect(newList.currentNode.next).toBe(null)

	//test next() method
	console.log ("testing next() method:")
	newList.first()
	console.log("current Node location 1:",newList.currentNode)
	newList.next()
	console.log("current Node location 2:",newList.currentNode)
	expect(newList.currentNode).toMatchObject(newList.head.next)
	newList.next()
	console.log("current Node location 3:",newList.currentNode)
	expect(newList.currentNode).toMatchObject(newList.head.next.next)

	//test previous() method 
	console.log ("testing previous() method:")
	newList.previous()
	console.log("current Node loc -1 ", newList.currentNode)
	expect(newList.currentNode).toMatchObject(newList.head.next) 
	newList.previous()
	console.log("current Node loc -2 ", newList.currentNode)
	expect(newList.currentNode).toMatchObject(newList.head) 

	//test delete() method
	console.log ("testing delett() method:")
	newList.next()
	newList.next()
	expect(newList.currentNode).toMatchObject(newList.head.next.next)
	console.log("current Node to delete ", newList.currentNode)
	newList.delete()
	expect(newList.currentNode).toMatchObject(newList.head.next)

	//test Total() method 
	console.log(newList.total())
	expect(newList.total()).toBe(15)

})