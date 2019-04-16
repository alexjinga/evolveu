import React from 'react'
import LL from './icons/LL.svg'
import LIFO from './icons/LIFO.svg'
import FIFO from './icons/FIFO.svg'

class NavBar extends React.Component{
	render(){
		return (
			<div className = "navbar">
				<div className="bttn" onClick = {() => this.props.onClick("LL")}>
					<img src={LL} className="App-logo2" alt = "LinkedList" />
				</div>
				<div className="bttn" onClick = {() => this.props.onClick("FIFO")}>
					<img src={FIFO} className="App-logo2" alt="Calculator"/>
				</div>
				<div className="bttn" onClick = {() => this.props.onClick("LIFO")}>
					<img src={LIFO} className="App-logo2" alt="account" />
				</div>
				
			</div>
		)
	}
}

export default NavBar