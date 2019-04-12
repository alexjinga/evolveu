import Account from './Account';
import myData from './AccountList.json'

class Accounts {
	constructor() {			
		this.accountList = [];
		this.counter = 0
		this.importAcounts()
	}

	importAcounts() {
		const tempArray = myData
		tempArray.forEach(item => {
			this.addAccount(item.name, item.balance)
		}) 
	}

	showAccounts() {		
		return this.accountList;
	}

	addAccount(accName, accBalance) {
		const newAccount = new Account(this.counter, accName, accBalance);
		this.accountList.push(newAccount);
		this.counter++
	}

	getAccountsTotal() {
		this.accTotal = this.accountList.reduce((acc, item) => {
			return parseInt(acc) + parseInt(item.accBalance);
		},0);
		return this.accTotal
	}

	getHighestAccount() {
		const arr = this.accountList
		let higher = arr[0]
		arr.forEach((item) => {	higher = (Number(higher.accBalance) <= Number(item.accBalance)) ? item : higher })
		return higher
	}

	getLowestAccount() {
		const arr = this.accountList
		let lower = arr[0]
		arr.forEach((item) => { lower = (Number(lower.accBalance) >= Number(item.accBalance)) ? item : lower })
		return lower
	}

	deposit(id, amount) {
		this.accountList.forEach(item => {
			if(item.id === id) {
				item.deposit(amount);
				return
			}
		})
	}

	withdraw(id, amount) {
		this.accountList.forEach(item => {
			if(item.id === id) {
				item.withdraw(amount);
				return
			}
		})
	}

	rename(id, newName) {
		this.accountList.forEach(item => {
			if(item.id === id) {
				item.accName = newName
				return
			}
		})
	}

	removeAccount(id) {
		let index = 0;
		this.accountList.forEach(item => {
			if(item.id === id) {
				this.accountList.splice(index, 1)
				return
			}
			index++;
		})
	}
}

export default Accounts;