const BankAccount = require('./BankAccount');

class SavingsAccount extends BankAccount {
  constructor(accountHolder, interestRate) {
    super(accountHolder);
    this.interestRate = interestRate;
  }

  applyInterest() {
    const interest = this.getBalance() * (this.interestRate / 100);
    this.deposit(interest);
    console.log(`Aplicado ${this.interestRate}% de juros`);
  }
}

module.exports = SavingsAccount;
