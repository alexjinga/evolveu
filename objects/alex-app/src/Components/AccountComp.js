import React from 'react'
import Account from './Account.js'
// import AccountsComp from "./AccountsComp.js"

class AcountComp extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			accountNameState: this.props.accountName, 
			accountBalanceState: this.props.accountBalance,
			newAmount: ""
		}
		this.account = new Account(0 ,this.state.accountNameState, this.state.accountBalanceState)
	}

	depositController = () => {
			this.account.deposit(Number(this.state.newAmount))
			this.setState({ accountBalanceState: this.account.getBalance()})
			this.setState({newAmount: ""})
		}

	withdrawlController = () => {
			this.account.withdraw(Number(this.state.newAmount))
			this.setState({accountBalanceState: this.account.getBalance()})
			this.setState({newAmount: ""})
		}

	handleDeposit = event => { 
		this.setState({newAmount: event.target.value})

		console.log ("handle deposit func=",this.state.newAmount)
	};


	render(){
		return (
			<div>	
				{/*<h2> Hello From Account Component </h2>*/}
				<input className="noBorderInput"
					type = "text"
					value = {this.state.accountNameState + ": $"+ this.state.accountBalanceState}
				/>
				<br />
				<input
					type = "number"
					placeholder ="Enter New Ammount"
					value = {this.state.newAmount}
					onChange = {this.handleDeposit}
				/>
				<br />
				<button className="bn" onClick = {this.depositController}>Deposit</button>
				<button className="bn" onClick = {this.withdrawlController}>Withdrawl</button>
				{/*<button className="bn" onClick = {() => {this.props.funcDelete(this.props.item)}}>Delete</button>*/}
				<br />
				<br />
			</div>
		)
	}

}

export default AcountComp

