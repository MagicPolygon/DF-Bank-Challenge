class Transaction {
    #type;
    #amount;
    #date;

    getType = () => {
        return this.#type;
    }

    setType = (type) => {
        this.#type = type;
    }

    getAmount = () => {
        return this.#amount;
    }

    setAmount = (amount) => {
        this.#amount = amount;
    }

    getDate = () => {
        return this.#date;
    }

    setDate = (date) => {
        this.#date = date;
    }
}

export default Transaction;