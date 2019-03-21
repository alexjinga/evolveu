import React from 'react'
import Account from './Account.js'
import AccountComp from "./AccountComp.js"

class AcountsComp extends React.Component {

	render(){
		return (
			<div>
				<h2> Hello From Accounts Component </h2>
				<AccountComp accountName="Checking Account" accountBalance="25" />
				<AccountComp accountName="Savings Account" accountBalance="25" />
				<AccountComp accountName="Margin Account" accountBalance="25" />
			</div>
		)
	}

}

export default AcountsComp