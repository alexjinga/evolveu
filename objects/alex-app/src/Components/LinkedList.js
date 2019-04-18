import data from './LinkedListElements.json'
import {Node, LinkedList} from './node.js'
import React from 'react'
import './LinkedList.css';

class Comp150 extends React.Component {

	constructor(){
		super()
		const newLinkList = new LinkedList()
		const n = (newLinkList.importList(data)).length - 1
		this.state = {
            nodeCount: n,
            linkList: newLinkList
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
		console.log("state array=",this.state.linkList.linkedListToArray())
		console.log("state Link list=", this.state.linkList)
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

	controller = () =>{
		return(
			<div>
				<br />
				<button 
                        id="addbtn"
                        onClick = {() => {
                        	const arr = this.state.linkList
                        	arr.first()
                        	this.setState({linkList: arr})
                        }} 
                >First Node</button>
                <br />
                <button 
                        id="addbtn"
                        onClick = {() => {
                        	const arr = this.state.linkList
                        	arr.last()
                        	this.setState({linkList: arr})
                        }} 
                >Last Node</button>
                <br />
                <button 
                        id="addbtn"
                        onClick = {() => {
                        	const arr = this.state.linkList
                        	arr.next()
                        	this.setState({linkList: arr})
                        }} 
                >Next Node</button>
                <br />
                <button 
                        id="addbtn"
                        onClick = {() => {
                        	const arr = this.state.linkList
                        	arr.previous()
                        	this.setState({linkList: arr})
                        }} 
                >Previous Node</button>
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

	render() {
        return(
            <div>
                <div className="accountCard">
                    <h4>Working with Linked List</h4>
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