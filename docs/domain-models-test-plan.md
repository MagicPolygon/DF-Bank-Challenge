# Domain Models and Test Plan

## Tasks 2 and 3:

### Kanban Board
[Kanban Board](https://trello.com/invite/b/083WTAH4/ATTIcd29eec61a0aced5d94e8391210d6b70370D698D/bank-challenge)

### User Stories & Domain Models
1. 
- As a bank customer,
- I want to be able to access my account,
- so that I can interact with it.

| Objects | Properties | Messages | Outputs |
|---------|------------|----------|---------|
| Account |            |          |         |
| N/A     |            | menu()   | @Void   |

No tests (Not testing the menu)

---

2. 
- As a bank customer,
- I want my account details to be saved whenever I make a transaction,
- so that I can load my saved account.

| Objects      | Properties                                             | Messages                           | Outputs                          |
|--------------|--------------------------------------------------------|------------------------------------|----------------------------------|
| Account      | #balance @Number,<br>transactions @Array[@Transaction] | getBalance(),<br>getTransactions() | @Number,<br>@Array[@Transaction] |
| AccountSaver |                                                        | saveAccount(@Account)              | @Void                            |
| Transaction  |                                                        |                                    |                                  |

---

3. 
- As a bank customer,
- I want my account to load as I saved it whenever I start-up the program,
- so that I can continue interaction with my saved account.

| Objects       | Properties                                             | Messages            | Outputs  |
|---------------|--------------------------------------------------------|---------------------|----------|
| Account       | #balance @Number,<br>transactions @Array[@Transaction] | setBalance(@Number) | @Void    |
| AccountLoader |                                                        | loadAccount()       | @Account |
| Transaction   |                                                        |                     |          |

---

4. 
- As a bank customer,
- I want my account to have a balance,
- so I can know how much money I have in my account.

| Objects | Properties       | Messages     | Outputs |
|---------|------------------|--------------|---------|
| Account | #balance @Number | getBalance() | @Number |

---

5. 
- As a bank customer,
- I want to be able to make deposits,
- so that I can store cash in my account.

| Objects | Properties       | Messages                                      | Outputs         |
|---------|------------------|-----------------------------------------------|-----------------|
| Account | #balance @Number | setBalance(@Number),<br>depositFunds(@Number) | @Void,<br>@Void |

Tests:
- depositFunds(100) should add 100 to the balance
- depositFunds(0.01) should add 0.01 to the balance
- depositFunds(0) should add 0 to the balance
- depositFunds(100) should add a transaction to the account's list of transactions
---

6. 
- As a bank customer,
- I want to be able to make withdrawals,
- so that I can take cash from my account.

| Objects | Properties       | Messages                                       | Outputs         |
|---------|------------------|------------------------------------------------|-----------------|
| Account | #balance @Number | setBalance(@Number),<br>withdrawFunds(@Number) | @Void,<br>@Void |

Tests:
- withdrawFunds(100) should subtract 100 from the balance
- withdrawFunds(0.01) should subtract 0.01 from the balance
- withdrawFunds(0) should subtract 0 from the balance
- withdrawFunds(100) should add a transaction to the account's list of transactions
- withdrawFunds(100) should not 

---

7. 
- As a bank customer,
- I want my account to have an up-to-date and dated transaction history,
- so that I can track my transactions.

| Objects     | Properties                                          | Messages                                                                                                         | Outputs                             |
|-------------|-----------------------------------------------------|------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| Account     | transactions @Array[@Transaction]                   | depositFunds(Number),<br>withdrawFunds(@Number),<br>dateTransaction(@String),<br>recordTransaction(@Transaction) | @Void,<br>@Void,<br>@Void,<br>@Void |
| Transaction | #type @String,<br>#amount @Number,<br>#date @String | setType(@String),<br>setAmount(@Number),<br>setDate(@String)                                                     | @Void,<br>@Void,<br>@Void           |

Tests:
- 
---

8. 
- As a banker,
- I don't want bank customers to withdraw more money than balance in their account if they don't have an overdraft facility enabled,
- so that they don't unfairly gain from the bank.

| Objects | Properties                                       | Messages               | Outputs |
|---------|--------------------------------------------------|------------------------|---------|
| Account | #balance @Number,<br>#overdraftFacility @Boolean | withdrawFunds(@Number) | @Void   |

---

9. 
- As a bank customer,
- I want to be able to print an account statement (dates, credits, debits, and balance),
- so that I can keep track of my money.

| Objects          | Properties                                             | Messages                 | Outputs |
|------------------|--------------------------------------------------------|--------------------------|---------|
| Account          | #balance @Number,<br>transactions @Array[@Transaction] |                          |         |
| StatementPrinter |                                                        | printStatement(@Account) | @Void   |

---

10. 
- As a bank customer,
- I want account statements to be formatted nicely when I print them,
- so that the account statement is more readable.

| Objects          | Properties                                             | Messages                 | Outputs |
|------------------|--------------------------------------------------------|--------------------------|---------|
| Account          | #balance @Number,<br>transactions @Array[@Transaction] |                          |         |
| StatementPrinter |                                                        | printStatement(@Account) | @Void   |


### User Stories & Domain Models (Additional Features)

11. 
- As a bank customer,
- I want credits and positive balances to be green, and negative balances and debits to be red, for printed account statements,
- so that it is easier to tell the good numbers from the bad numbers.

| Objects          | Properties                                             | Messages                 | Outputs |
|------------------|--------------------------------------------------------|--------------------------|---------|
| Account          | #balance @Number,<br>transactions @Array[@Transaction] |                          |         |
| StatementPrinter |                                                        | printStatement(@Account) | @Void   |

---

12. 
- As a bank customer,
- I want to be able to enable an overdraft facility on my account,
- so that I can borrow money if I don't have enough in my balance.

| Objects | Properties                  | Messages                       | Outputs |
|---------|-----------------------------|--------------------------------|---------|
| Account | #overdraftFacility @Boolean | setOverdraftFacility(@Boolean) | @Void   |

Tests:
- 

---

13. 
- As a bank customer,
- I want to be able to withdraw an amount that results in a negative balance, if I have an overdraft facility enabled on my account,
- so that I can borrow money if I don't have enough in my account.

| Objects | Properties                                       | Messages                                       | Outputs         |
|---------|--------------------------------------------------|------------------------------------------------|-----------------|
| Account | #balance @Number,<br>#overdraftFacility @Boolean | setBalance(@Number),<br>withdrawFunds(@Number) | @Void,<br>@Void |

---

14. 
- As a bank customer,
- I want an overdraft limit on my account if it has an overdraft facility enabled,
- so that I don't withdraw more than the sum of my balance and overdraft limit.

| Objects | Properties                                   | Messages                                       | Outputs         |
|---------|----------------------------------------------|------------------------------------------------|-----------------|
| Account | #balance @Number,<br>#overdraftLimit @Number | setBalance(@Number),<br>withdrawFunds(@Number) | @Void,<br>@Void |