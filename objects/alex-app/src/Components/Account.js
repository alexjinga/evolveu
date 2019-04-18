class Account {
	constructor(id, accName, accBalance) {
		this.id = id;
		this.accName = accName;
		this.accBalance = accBalance;
		this.amountChange = "";
	}

	deposit(amount) {
		this.accBalance = parseInt(this.accBalance) + parseInt(amount);
	}

	withdraw(amount) {
		this.accBalance = parseInt(this.accBalance) - parseInt(amount);
	}

	getBalance() {
		return this.accBalance;
	}
}

export default Account;
