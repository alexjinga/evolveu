import Fif from './fifo_pojo.js'
import Lif from './lifo_pojo.js'
import React from 'react'
import './LinkedList.css'

class FIFO extends React.Component {

	constructor(){
		super()
		this.state = {
           	queue: new Fif (["item 1", "item 2", "item 3", "item 4", "item 5"]),
           	queueCount: 5,
           	stack: new Lif (["item 1", "item 2", "item 3", "item 4", "item 5"]),
        	stackCount: 5,
        }
        console.log ("q=",this.state.queue)
        console.log ("s=",this.state.stack)
    }
       
    makeElement = (item) => {
    	return (
    		<div>
    		 	<button >{item}</button>
    		</div>
    	)
    }

	displayQueue = () => {
		const arr = this.state.queue.elements
		// console.log ("arrQ=", arr)
		let queueArray = []
		arr.forEach((item) => {
			// console.log(item)
			queueArray.push(this.makeElement(item))
		})
		// console.log ("queueArray=", queueArray)
		return queueArray
	}

	displayStack = () => {
		const arr = this.state.stack.elements
		// console.log ("arrS=", arr)
		let stackArray = []
		arr.forEach((item) => {
			stackArray.push(this.makeElement(item))
		})
		// console.log ("stackArray=", stackArray)
		return stackArray
	}

	showQueue = () =>{
        if (this.state.queue.elements.length === 0){
            return(
                <div>
                    <h6> Please add elements to the Queue</h6>
                </div>
            )
        } else {
    		return(
    			<div>
    				{this.displayQueue()}          
    			</div>
    		)
        }   
	}

	showStack = () =>{
        if (this.state.stack.elements.length === 0){
            return(
                <div>
                    <h6> Please add elements to the Stack</h6>
                </div>
            )
        } else {
    		return(
    			<div>
    				{this.displayStack()}          
    			</div>
    		)
        }   
	}

	controllerQueue = () =>{
        return(
    		<div>
    			<button 
                        id="addbtn"
                        onClick = {() => {
                          	const arr = this.state.queue
                          	let index = this.state.queueCount
                          	index++
                          	console.log ("index", index)
                          	console.log("arr=",arr)
                           	arr.addToQueue("item "+ index)
                           	this.setState({queue: arr})
                           	this.setState({queueCount: index})
                          
                        }} 
                >+</button>
        	    <button 
                    id="addbtn"
                    onClick = {() => {
                     	const arr = this.state.queue
                           	arr.removeFromQueue()
                           	this.setState({queue: arr})
                    }} 
                >-</button>
    		</div>
    	)
	} 

	controllerStack = () =>{
        return(
    		<div>
    			<button 
                        id="addbtn"
                        onClick = {() => {
                          	const arr = this.state.stack
                          	let index = this.state.stackCount
                          	index++
                           	arr.addToStack("item "+ index)
                           	this.setState({stack: arr})
                           	this.setState({stackCount: index})
                       
                        }} 
                >+</button>
        	    <button 
                    id="addbtn"
                    onClick = {() => {
                     	const arr = this.state.stack
                           	arr.removeFromStack()
                           	this.setState({stack: arr})
                    }} 
                >-</button>
    		</div>
    	)
	} 

	render() {
        return(
            <div>
                <div className="accountCard">
                    <h4>Working with Queue and Stack </h4>
                </div>
                <div className = "flexIt2" >
                    <div id = "leftSide" >
                    	<h5> Queue (FIFO) </h5>
                       	{this.controllerQueue()}
                       	<br />
                       	{this.showQueue()}
                    </div>
                    <div id = "rightSide">
                        <h5> Stack (LIFO) </h5>
                       	{this.controllerStack()}
                       	<br />
                       	{this.showStack()}
                    </div>
                </div>
            </div>
        )
    }
}


export default FIFO