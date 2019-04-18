import data from './LinkedListElements.json'
import {Node, LinkedList} from './node.js'
import {Node2, LinkedList2} from './node2.js'
import React from 'react'
import './LinkedList.css';

class Comp150 extends React.Component {

	constructor(){
		super()
		// const newLinkList = new LinkedList()
		// const n = (newLinkList.importList(data)).length
		this.state = {
            nodeCount: 0,
            linkList: null
        }
    }

	makeButton = (item) => {
		if (item[0]===1){
			return(
				<div>
					<button id="currentNode">{item[1] + "  " +item[2]}</button>
				</div>
			)
		} else {
			return(
				<div>
					<button >{item[1] + "  " +item[2]}</button>
				</div>
			)
		}
	}

	buttonsLinkedList = () => {
		const arr = this.state.linkList.linkedListToArray()
		let buttonArray = []
		arr.forEach((item) => {
			buttonArray.push(this.makeButton(item))
		})
		return buttonArray
	}

	showData = () =>{
		// console.log("state array=",this.state.linkList.linkedListToArray())
		// console.log("state Link list=", this.state.linkList)
        if (this.state.linkList === null){
            return(
                <div>
                    <h6> Please chose one of the 2 linked list types</h6>
                </div>
            )
        } else {
    		return(
    			<div>
    				<input className="noBorderInput"
                        type = "text"
                        value = {"TOTAL: "+ this.state.linkList.total()}
                    />
        			{this.buttonsLinkedList()}          
    			</div>
    		)
        }   
	}

	controller = () =>{
        if (this.state.linkList === null){
            return(
                <div>
                </div>
            )
        } else {
    		return(
    			<div>
    				<br />
                    <br />
    				<button 
                            id="addbtn"
                            onClick = {() => {
                            	const arr = this.state.linkList
                            	arr.first()
                            	this.setState({linkList: arr})
                            }} 
                    > ◄◄ </button>
                    <button 
                            id="addbtn"
                            onClick = {() => {
                                const arr = this.state.linkList
                                arr.previous()
                                this.setState({linkList: arr})
                            }} 
                    > ◄ </button>
                    <button 
                            id="addbtn"
                            onClick = {() => {
                                const arr = this.state.linkList
                                arr.next()
                                this.setState({linkList: arr})
                            }} 
                    > ► </button>
                    <button 
                            id="addbtn"
                            onClick = {() => {
                            	const arr = this.state.linkList
                            	arr.last()
                            	this.setState({linkList: arr})
                            }} 
                    > ►► </button>
                    <br />
                    <button 
                            id="addbtn"
                            onClick = {() => {
                            	const arr = this.state.linkList
                            	arr.delete()
                            	this.setState({linkList: arr})
                            }} 
                    >Delete Node</button>
                    <br />
                    <button 
                            id="addbtn"
                            onClick = {() => {
                            	const arr = this.state.linkList
                            	arr.insert("node",this.state.nodeCount)
                            	this.state.nodeCount++
                            	this.setState({linkList: arr})
                            }} 
                    >Add Node</button>
    			</div>
    		)
        }
	} 

	render() {
        return(
            <div>
                <div className="accountCard">
                    <h4>Working with Linked List</h4>
                    <button 
                        id="addbtn"
                        onClick = {() => {
                            const newLinkList = new LinkedList()
                            const n = (newLinkList.importList(data)).length
                            this.setState({nodeCount: n})
                            this.setState({linkList: newLinkList})
                        }} 
                    >Single Linked List</button>
                    <button 
                        id="addbtn"
                        onClick = {() => {
                            const newLinkList = new LinkedList2()
                            const n = (newLinkList.importList(data)).length-1
                            this.setState({nodeCount: n})
                            this.setState({linkList: newLinkList})
                        }} 
                    >Double Linked List</button>
                    <br />
                </div>
                <div className = "flexIt2" >
                    <div id = "leftSide" >
                       {this.showData()}
                    </div>
                    <div id = "rightSide">
                       {this.controller()}
                    </div>
                </div>
            </div>
        )
    }
}

export default Comp150