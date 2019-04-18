import Account from './Account';
import Accounts from './Accounts';

test('Test the Accounts Controller Constructor', () => {
	console.log('Testing the Accounts Constructor');
	let accts = new Accounts();

	console.log('Testing the showAccount method');
	expect(accts.accountList.length).toBe(5);

	console.log('test the addAccount method');
	expect(accts.accountList[0].accName).toBe('Checking');
	expect(accts.accountList[0].id).toBe(0);
	expect(accts.accountList[0].accBalance).toBe("222");
	

	console.log('Testing the getAccountsTotal Method');
	accts.getAccountsTotal();
	expect(accts.accTotal).toBe(3516);

	console.log('Testing the getHighestAccount Method');
	expect(accts.getHighestAccount().accBalance).toBe("2000");

	console.log('Test the getLowestAccount Method'); 
	expect(accts.getLowestAccount().accBalance).toBe("60");

	console.log('Test the Deposit Method');
	accts.deposit(1, 250);
	expect(accts.accountList[1].accBalance).toBe(584);

	console.log('Test the Withdraw Method');
	accts.withdraw(2, 500);
	expect(accts.accountList[2].accBalance).toBe(400);

	console.log('Test the Name Account Method');
	accts.rename(0, 'Ian Savings');
	expect(accts.accountList[0].accName).toBe('Ian Savings');

	console.log('Test the Remove Account Method');
	accts.removeAccount(1);
	expect(accts.accountList.length).toBe(4);
	expect(accts.accountList[1].accName).toBe('TFSA');
	

});