import React from 'react'
import Account from './Account.js'

class AcountComp extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			accountNameState: this.props.accountName, 
			accountBalanceState: this.props.accountBalance,
		}
		this.account = new Account(this.state.accountNameState, this.state.accountBalanceState)
		console.log(this.account.deposit)
	}



	handleDeposit = event => { 
	// 	this.setState({ newAmmountValueState: event.target.value})
	// 	console.log ("new amount= ", this.state.newAmmountValueState)
	// 	console.log ("balance= ", this.state.totalAmountValueState)
	};


	// handleChangeBox2 = event => {
	// 	this.setState({ box2ValueState: event.target.value})
	// 	console.log (this.state.box2ValueState)
	// }


	handleClick = (e) => {
		{ e === '+' && console.log ("deposit")}
		{ e === '-' && console.log ("withdrawl")}
		{ e === 's' && console.log (Number(this.state.accountBalanceState))}
		// { e === '+' && this.setState({ totalAmountValueState: oper.deposit(Number(this.state.newAmountValueState),Number(this.state.totalAmountValueState))}) }
		// { e === '-' && this.setState({ totalAmountValueState: oper.withdrawl(Number(this.state.totalAmountValueState),Number(this.state.newAmountValueState))}) }
		// { e === 's' && this.setState({ resultValueState: oper.multiply(Number(this.state.box1ValueState),Number(this.state.box2ValueState))}) }
	}


	render(){
		return (
			<div>	
				<h2> Hello From Account Component </h2>
				<input className="noBorderInput"
					type = "text"
					value = {this.state.accountNameState + ": $"+ this.state.accountBalanceState}
				/>
				<br />
				<input
					type = "number"
					placeholder ="Enter New Ammount"
					
				/>
				<br />
				<button className="bn" onClick = {() => this.handleClick("+")}>Deposit</button>
				<button className="bn" onClick = {() => this.handleClick("-")}>Withdrawl</button>
				<br />
				<br />
			</div>
		)
	}

}

export default AcountComp

/*value = {this.state.newAmountValueState}*/