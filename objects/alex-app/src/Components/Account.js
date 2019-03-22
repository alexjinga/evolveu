class Account {

	constructor(accountName, startingBalance){
		this.name = accountName;
		this.balance = parseInt(startingBalance);
		// this.total = 0;
		}
	
	deposit (amount) {
		// console.log(amount)
		this.balance = this.balance + parseInt(amount)
	}

	withdrawl (amount) {
		this.balance = this.balance - parseInt(amount)
	}

	showBalance(){
		console.log(" balance from Account.js showBalance= ", this.balance)
		return(this.balance)
	}

	totalAccounts (accountArray) {
		let total = 0
		accountArray.forEach((item) => {total = total + Number(item.balance)})
		return total
	}

	smallestAccount (accountArray) {
		let lowest = accountArray[0]
		accountArray.forEach((item) => {
			lowest = (Number(lowest.balance) >= Number(item.balance)) ? item : lowest
		})
		return lowest
	}

	biggestAccount (accountArray) {
		let highest = accountArray[0]
		accountArray.forEach((item) => {
			highest = (Number(highest.balance) <= Number(item.balance)) ? item : highest 
		})
		return highest
	}
}

export default Account