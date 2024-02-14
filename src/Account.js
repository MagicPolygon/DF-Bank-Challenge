class Account {
    #balance;
    #overdraftFacility;
    #transactions = [];

    constructor(balance = 0, overdraftFacility) {
        this.#balance = balance;
        this.#overdraftFacility = overdraftFacility;
    }

    depositFunds = (funds, transaction, date) => {
        if (funds >= 0) {
            this.#balance += funds;
            transaction.setType("credit");
            transaction.setAmount(funds);
            transaction.setDate(date);
            this.#transactions.push(transaction);
        }
    }

    withdrawFunds = (funds, transaction, date) => {
        // Case: overdraft facility is enabled or we withdraw less than the balance
        if (this.#overdraftFacility || this.#balance > funds) {
            this.#balance -= funds;
            transaction.setType("debit");
            transaction.setAmount(funds);
            transaction.setDate(date);
            this.#transactions.push(transaction);
        }
    }

    getBalance = () => {
        return this.#balance;
    }

    getOverdraftFacility = () => {
        return this.#overdraftFacility;
    }

    setOverdraftFacility = (overdraftFacility) => {
        if (typeof overdraftFacility === 'boolean') {
            this.#overdraftFacility = overdraftFacility;
        }
    }

    getTransactions = () => {
        this.#transactions.forEach(transaction => console.log(transaction.getDate()))
        return this.#transactions;
    }
}

export default Account;