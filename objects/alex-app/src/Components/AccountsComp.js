import React from 'react'
import Account from './Account.js'
import AccountComp from "./AccountComp.js"
import myData from './AccountList.json'

class AcountsComp extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			arrayData: myData,
		}
		this.ac = new Account()
	}

	componentDidMount(){
   		this.accountStatusBar();
 	}

 	showData = () => {
		let accountList = []
		const arr = this.state.arrayData
										console.log ("showData state array=", arr)
		arr.forEach ((item) => {
			accountList.push(
				<AccountComp accountName={item.name} 
				accountBalance={item.balance} 
				funcDelete={this.handleDelete} 
				item={item}
				key = {item.name}
			/>)
		})
										console.log(accountList)
		return accountList
	}

 	accountStatusBar = () => {
		const arr = this.state.arrayData
		let higher = arr[0]
		let lower = arr[0]
		let total = 0

		arr.forEach((item) => {
			total = total + Number(item.balance)
		 	lower = (Number(lower.balance) >= Number(item.balance)) ? item : lower
		 	higher = (Number(higher.balance) <= Number(item.balance)) ? item : higher
		 								console.log(item)

		 })
										console.log(higher)
		return(
			<div>
				<input className="noBorderInput"
					type = "text"
					value = {"Total: $" + total}
				/>
				<input className="noBorderInput"
					type = "text"
					value = {"Highest: $"+ higher.balance}
				/>
				<input className="noBorderInput"
					type = "text"
					value = {"Lowest: $"+ lower.balance}
				/>
				<br />
				<br />
			</div>	
		)
			
			
	}

	handelNewAccount = () => {
		this.accountStatusBar()
										console.log(this.state.arrayData)
	}

	handleDelete = (item) => {
 										console.log ("array item to delete=", item)
 		let arr = this.state.arrayData
 		let result = arr.filter(arr => arr !== item)
 										console.log ("result =", result)
 		this.setState({arrayData: result})
 										console.log("state array= ",this.state.arrayData)
 		// this.accountStatusBar()
 		// this.showData()
 	}

	render(){
		return (
			<div>
				<h2> Hello From Accounts Component </h2>
					{this.accountStatusBar()}
				<div> 
					<button className="bn" onClick = {this.handelNewAccount}>New Account</button>
				</div>	
				<div>
					{this.showData()}

				</div>
			</div>
		)
	}

}

export default AcountsComp
