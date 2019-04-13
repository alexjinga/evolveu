import React from 'react';
import Accounts from './Accounts'
import './AccountsComp.css';

class AccountsComp extends React.Component{
    constructor() {
        super()
        this.state = {
            view: "",
            accountsArray: new Accounts()
        }
         const modifyObj = []
    }
    
    depositController= (id, balance) => {
        const arr = this.state.accountsArray
        arr.deposit(id, balance)
        this.setState({accountsArray: arr})
    } 

    withdrawController= (id, balance) => {
        const arr = this.state.accountsArray
        arr.withdraw(id, balance)
        this.setState({accountsArray: arr})
    } 

    modifyController= (id, name, balance) => {
        this.modifyObj = [id, name, balance]
        this.setState({view:"modify"})
    } 

    deleteController = (id) => {
        this.setState({accountArray: this.state.accountsArray.removeAccount(id)})
    }

     handleAmmountChange = event => { 
        this.setState({newAmount: event.target.value})
    }
 
    showData = () => {
        let accListComp = []
        const arr = this.state.accountsArray.accountList
        arr.forEach ((item) => {
            accListComp.push(
                <div className="flexIt2" key={item.id} id="endLine">   
                        <div id="sides">
                            <input className="noBorderInput"
                                type = "text"
                                value = {"Name: "+ item.accName}
                            />
                            <input className="noBorderInput"
                                type = "text"
                                value = {"Balance: $"+ item.accBalance}
                            />
                        </div>
                       
                        <div id="sides">
                            <button id="addbtn" className="bn" onClick = {
                                () => {this.modifyController(item.id, item.accName, item.accBalance)}
                            }>Modify</button>

                            <button id="addbtn" className="bn" onClick = {
                                () => {this.deleteController(item.id)}
                            }>Delete</button>
                        </div>
                    
                </div>
            )
        })
        return accListComp
    }

    accountStatusBar = () => {
        return(
            <div>
                <input className="noBorderInput"
                    type = "text"
                    value = {"TOTAL: $" + this.state.accountsArray.getAccountsTotal()}
                />
                <br />
                <input className="noBorderInput"
                    type = "text"
                    value = {"HIGHEST: "+this.state.accountsArray.getHighestAccount().accName 
                                +" - $"+ this.state.accountsArray.getHighestAccount().accBalance}
                />
                <input className="noBorderInput"
                    type = "text"
                    value = {"LOWEST: "+this.state.accountsArray.getLowestAccount().accName 
                                +" - $"+ this.state.accountsArray.getLowestAccount().accBalance}
                />
                <br />
            </div>  
        )
    }

    addNewAccount = (name, balance) => {
        const arr = this.state.accountsArray
        arr.addAccount(name, balance)
        this.setState({accountsArray: arr})
    }

    submitOnClick = (name, balance) => {
        if (name === undefined) {
        } else { 
            if (balance === undefined || balance === NaN){
                this.addNewAccount (name, 0)
            } else {
                this.addNewAccount(name,balance)
            }
        }
        this.setState({view:""})
    }

    displayTitle = (type) => {
        if (type === "new") {
            return (<h4> Open New Account </h4>)
        } else {
            return (
                <div>
                    <h4> {this.modifyObj[1]} Account Transactions</h4>
                </div>
            )
        }
    } 

    displayInputs = (type) => {
        let inputPlaceHolderName =""
        let inputPlaceHolderBalance =""
        let inputValueName=""

        if (type === "new") {
            inputPlaceHolderName = "Enter New Account Name"
            inputPlaceHolderBalance ="Enter Initial Balance"

        } else {
           inputPlaceHolderName = this.modifyObj[1] + " Account"
           inputPlaceHolderBalance ="$ 0"
        }

        return (
            <div>
                <input  type = "text"
                    placeholder ={inputPlaceHolderName}
                    value = {this.name}
                    onChange = {
                        (event)=>{
                            this.name = event.target.value
                        }
                    }
                />
                <input  type = "number"
                    placeholder = {inputPlaceHolderBalance}
                    value = {this.balance}
                    onChange = {
                        (event)=>{
                            this.balance = event.target.value
                        }
                    }
                />
            </div>
        )
    }

    displayButtons = (type) => {
        if (type === "new") {
            return (
                <div>
                    <button id="addbtn" onClick= {
                        () => {
                            this.submitOnClick(this.name, this.balance)
                            this.name=undefined
                            this.balance=undefined
                        }
                    }>Submit</button>
                    <button id="addbtn" onClick= {
                        () => {
                            this.setState({view:""})
                            this.name=undefined
                            this.balance=undefined
                        }
                    }>Cancel</button>
                </div>
            )

        } else {
            return (
                <div>
                    <button id="addbtn" onClick= {
                        () => {
                            if (this.balance === undefined || this.balance === NaN){
                                this.balance=0
                            }
                            this.depositController(this.modifyObj[0], this.balance)
                            this.name=undefined
                            this.balance=undefined
                            this.setState({view:""})
                        }
                    }>Deposit</button>

                    <button id="addbtn" onClick= {
                        () => {
                            if (this.balance === undefined || this.balance === NaN){
                                this.balance=0
                            }
                            this.withdrawController(this.modifyObj[0], this.balance)
                            this.name=undefined
                            this.balance=undefined
                            this.setState({view:""})
                        }
                    }>Withdrawl</button>

                    <button id="addbtn" onClick= {
                        () => {
                            this.setState({view:""})
                            this.name=undefined
                            this.balance=undefined
                        }
                    }>Close</button>
                </div>
            )
        }
    }

    conditionalDisplay = (type) => {
        return(
            <div id = "leftSide">
                {this.displayTitle(type)}
                {this.displayInputs(type)}
                {this.displayButtons(type)}
            </div>
        )
    }

    render() {
        return(
            <div>
                <div className="accountCard">
                    {this.accountStatusBar()}
                </div>
                <div className = "flexIt2" >
                    <div id = "leftSide" >
                        <div id="endLine">
                            <button 
                                id="addbtn"
                                onClick = {() => {this.setState({view:"add"})} } 
                            >Add Account</button>
                        </div>
                       {this.showData()}
                    </div>
                    <div id = "rightSide">
                        {this.state.view === 'add' && this.conditionalDisplay("new")}
                        {this.state.view === 'modify' && this.conditionalDisplay("modify")}
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountsComp