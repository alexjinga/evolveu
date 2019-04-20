import React from 'react'
import Calculator from './icons/calculator_2.svg';
import Photobombing from './icons/Photobombing.svg';
import account from './icons/account.svg';
import accounts from './icons/accounts.svg';
import cities from './icons/city_2.svg';
import LL from './icons/LL.svg'
import LIFO from './icons/LIFO.svg'
import FIFO from './icons/FIFO.svg'

class CoolIcons extends React.Component{
	render(){
		return (
			<div className = "navbar">
				<div className="bttn" onClick = {() => this.props.onClick("Phts")}>
					<img src={Photobombing} className="App-logo2" alt = "giffy" />
				</div>
				<div className="bttn" onClick = {() => this.props.onClick("Math")}>
					<img src={Calculator} className="App-logo2" alt="Calculator"/>
				</div>
				<div className="bttn" onClick = {() => this.props.onClick("account")}>
					<img src={account} className="App-logo2" alt="account" />
				</div>
				<div className="bttn" onClick = {() => this.props.onClick("accounts")}>
					<img src={accounts} className="App-logo2" alt="accounts" />
				</div>
				<div className="bttn" onClick = {() => this.props.onClick("cities")}>
					<img src={cities} className="App-logo2" alt="cities" />
				</div>
				<div className="bttn" onClick = {() => this.props.onClick("LL")}>
					<img src={LL} className="App-logo2" alt = "LinkedList" />
				</div>
				<div className="bttn" onClick = {() => this.props.onClick("FIFO")}>
					<img src={LIFO} className="App-logo2" alt="Queue&Stack" />
				</div>
				{/*<div className="bttn" onClick = {() => this.props.onClick("LIFO")}>
					<img src={LIFO} className="App-logo2" alt="account" />
				</div>*/}
			</div>
		)
	}
}

export default CoolIcons 