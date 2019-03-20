import Account from "./Account.js"

test('testing account class & methods: ', () => {
	const obj = new Account('checkingAccount', 25)
	expect(obj.name).toBe('checkingAccount')
	expect(obj.balance).toBe(25);
	obj.deposit(10)
	expect(obj.balance).toBe(35)
	obj.withdrawl(30)
	expect(obj.balance).toBe(5)
	expect(obj.showBalance()).toBe(5)
})
