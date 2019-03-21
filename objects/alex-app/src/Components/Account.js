class Account {

	constructor(accountName, startingBalance){
		this.name = accountName;
		this.balance = parseInt(startingBalance);
		}
	
	deposit (amount) {
		// console.log(amount)
		this.balance = this.balance + parseInt(amount)
	}

	withdrawl (amount) {
		this.balance = this.balance - parseInt(amount)
	}

	showBalance(){
		console.log(this.balance)
		return(this.balance)
	}
}

export default Account