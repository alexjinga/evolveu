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

}

export default Account