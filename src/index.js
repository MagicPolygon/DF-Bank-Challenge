import Account from "./Account.js";
import Transaction from "./Transaction.js";
import StatementPrinter from "./StatementPrinter.js";

const account = new Account();
const transaction = new Transaction();
account.depositFunds(1000, transaction, "10-01-2012");
console.log(account.getTransactions());
const transaction2 = new Transaction();
account.depositFunds(2000, transaction2, "13-01-2012");
const transaction3 = new Transaction();
account.withdrawFunds(500, transaction3, "14-01-2012");

StatementPrinter.printStatement(account);
console.log(account.getTransactions());
