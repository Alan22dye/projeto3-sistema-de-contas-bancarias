const BankAccount = require('./BankAccount');
const SavingsAccount = require('./SavingsAccount');

const johnAccount = new BankAccount('John');
johnAccount.deposit(1000);
johnAccount.deposit(500);
johnAccount.withdraw(300);

const marySavingsAccount = new SavingsAccount('Mary', 1.5);
marySavingsAccount.deposit(2000);
console.log(`Saldo total de ${marySavingsAccount.getAccountHolder()}: R$${marySavingsAccount.getBalance().toFixed(2)}`);
marySavingsAccount.applyInterest();
marySavingsAccount.withdraw(500);
