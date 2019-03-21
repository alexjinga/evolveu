import React from 'react'
import Account from './Account.js'
import AccountComp from "./AccountComp.js"
import myData from './AccountList.json'

class AcountsComp extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			arrayData: myData,
			// statusBar: [0, 0, 0],
			lowestAccount: "",
			highestAccount: "",
			totalMoney: "",
		}
		this.ac = new Account
	}

	// componentDidMount(){
 //    	this.accountStatusBar();
 //  	}

	showData = () => {
		let accountList = []
		const arr = this.state.arrayData
		arr.forEach ((item) => {
			accountList.push(<AccountComp accountName={item.name} accountBalance={item.balance} />)
		})
		return accountList
	}

	accountStatusBar = () => {
			const arr = this.state.arrayData
			this.setState({totalMoney: this.ac.totalAccounts(arr)})
			this.setState({lowestAccount: this.ac.smallestAccount(arr)})
			this.setState({highestAccount: this.ac.biggestAccount(arr)})
			
	}

	handelNewAccount = () => {
		console.log ("inside the new account func")
	}

	render(){
		return (
			<div>
				<h2> Hello From Accounts Component </h2>
					<input className="noBorderInput"
					type = "text"
					value = {"Total" + ": $" + this.state.totalMoney}
					/>
					<input className="noBorderInput"
					type = "text"
					value = {"Highest" + ": $"+ this.state.highestAccount.balance}
					/>
					<input className="noBorderInput"
					type = "text"
					value = {"lowest" + ": $"+ this.state.lowestAccount.balance}
					/>
					<br />
					<br />
				<div> 
					<button className="bn" onClick = {this.accountStatusBar}>New Account</button>
				</div>	
				<div>
					{this.showData()}

				</div>
			</div>
		)
	}

}

export default AcountsComp