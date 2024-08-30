class BankAccount {
    #balance;
    #accountHolder;
  
    constructor(accountHolder) {
      this.#balance = 0;
      this.#accountHolder = accountHolder;
    }
  
    deposit(amount) {
      this.#balance += amount;
      console.log(`${this.#accountHolder} depositou R$${amount.toFixed(2)} | Saldo total: R$${this.#balance.toFixed(2)}`);
    }
  
    withdraw(amount) {
      if (amount <= this.#balance) {
        this.#balance -= amount;
        console.log(`${this.#accountHolder} sacou R$${amount.toFixed(2)} | Saldo total: R$${this.#balance.toFixed(2)}`);
      } else {
        console.log(`${this.#accountHolder} tentou sacar R$${amount.toFixed(2)} | Saldo insuficiente!`);
      }
    }
  
    getBalance() {
      return this.#balance;
    }
  
    getAccountHolder() {
      return this.#accountHolder;
    }
  }
  
  module.exports = BankAccount;
  