import React from 'react'
import Calc from './Math'

class MathComp extends React.Component {
	constructor(){
		super()
		this.state ={
			box1ValueState: "",
			box2ValueState: "",
			resultValueState: "",
			buttonState: "",
		};		
	}

	
	handleChangeBox1 = event => {
		this.setState({ box1ValueState: event.target.value})
		// console.log (this.state.box1ValueState)
	};


	handleChangeBox2 = event => {
		this.setState({ box2ValueState: event.target.value})
		// console.log (this.state.box2ValueState)
	}


	handleClick = (e) => {
		const oper = new Calc()
		e === '+' && this.setState({ resultValueState: oper.sum(Number(this.state.box1ValueState),Number(this.state.box2ValueState))}) 
		e === '-' && this.setState({ resultValueState: oper.substruct(Number(this.state.box1ValueState),Number(this.state.box2ValueState))})
		e === 'x' && this.setState({ resultValueState: oper.multiply(Number(this.state.box1ValueState),Number(this.state.box2ValueState))}) 
		e === '/' && this.setState({ resultValueState: oper.divide(Number(this.state.box1ValueState),Number(this.state.box2ValueState))}) 
	}


	render(){
		return (
			<div>
				<h2> Hello from Math Component </h2>
				<p>Enter two numbers:</p> 	
				<input
					type = "number"
					placeholder ="Enter 1st operand"
					value = {this.state.box1ValueState}
					onChange = {this.handleChangeBox1}
				/>
				<br />
				<input
					type = "number"
					placeholder ="Enter 2nd operand"
					value = {this.state.box2ValueState}
					onChange = {this.handleChangeBox2}
				/>
				<br />
				<button className="bn" onClick = {() => this.handleClick("+")}>+</button>
				<button className="bn" onClick = {() => this.handleClick("-")}>-</button>
				<button className="bn" onClick = {() => this.handleClick("x")}>x</button>
				<button className="bn" onClick = {() => this.handleClick("/")}>/</button>
				<br />
				<input
					type = "number"
					placeholder ="result"
					value = {this.state.resultValueState}
				/>
				<br />
				<br />
			</div>
		)

	}
}

export default MathComp
