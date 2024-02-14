import Account from "../src/Account.js";
import Transaction from "../src/Transaction.js";

describe('Account tests:', () => {

    describe('depositFunds', () => {

        xit('should add 100 to the balance when depositFunds is called.', () => {
            // Arrange
            const testAccount = new Account();
            const spyTransaction = jasmine.createSpyObj("Test Transaction", ['setType', 'setAmount', 'setDate']);
            const expectedValue = 100;

            // Act
            testAccount.depositFunds(100, spyTransaction);

            // Assert
            expect(testAccount.getBalance()).toBe(expectedValue);
        });

        xit('should add 0.01 to the balance when depositFunds is called', () => {
            // Arrange
            const testAccount = new Account();
            const spyTransaction = jasmine.createSpyObj("Test Transaction", ['setType', 'setAmount', 'setDate']);
            const expectedValue = 0.01;

            // Act
            testAccount.depositFunds(0.01, spyTransaction);

            // Assert
            expect(testAccount.getBalance()).toBe(expectedValue);
        });

        xit('should add 0 to the balance when depositFunds is called', () => {
            // Arrange
            const testAccount = new Account();
            const spyTransaction = jasmine.createSpyObj("Test Transaction", ['setType', 'setAmount', 'setDate']);
            const expectedValue = 0;

            // Act
            testAccount.depositFunds(0, spyTransaction);

            // Assert
            expect(testAccount.getBalance()).toBe(expectedValue);
        });

        xit('should not add -500 to the balance when depositFunds is called', () => {
            // Arrange
            const testAccount = new Account();
            const expectedValue = 0;

            // Act
            testAccount.depositFunds(-500);

            // Assert
            expect(testAccount.getBalance()).toBe(expectedValue);
        });

        xit('should set its respective transaction object\'s #type property to "credit"', () => {
            // Arrange
            const testAccount = new Account();
            const spyTransaction = jasmine.createSpyObj("Test Transaction", ['getType', 'setType', 'setAmount', 'getDate', 'setDate']);
            spyTransaction['#type'] = null; // Manually add the #type property
            spyTransaction.setType.and.callFake((type) => { spyTransaction['#type'] = type; }); // Set the #type property in the fake function
            const expectedValue = "credit";

            // Act
            testAccount.depositFunds(200, spyTransaction);

            // Assert
            expect(testAccount.getTransactions()[0]['#type']).toBe(expectedValue); // Access the #type property directly
            expect(spyTransaction.setType).toHaveBeenCalledWith(expectedValue);
        });

        xit('should set its respective transaction object\'s #amount property to 200', () => {
            // Arrange
            const testAccount = new Account();
            const spyTransaction = jasmine.createSpyObj("Test Transaction", ['getType', 'setType', 'getAmount', 'setAmount', 'getDate', 'setDate']);
            spyTransaction['#amount'] = null; // Manually add the #amount property
            spyTransaction.setAmount.and.callFake((amount) => { spyTransaction['#amount'] = amount; }); // Set the #amount property in the fake function
            const expectedValue = 200;

            // Act
            testAccount.depositFunds(200, spyTransaction);

            // Assert
            expect(testAccount.getTransactions()[0]['#amount']).toBe(expectedValue); // Access the #type property directly
            expect(spyTransaction.setAmount).toHaveBeenCalledWith(expectedValue);
        });

        xit('should set its respective transaction object\'s #date property to "10-01-2012"', () => {
            // Arrange
            const testAccount = new Account();
            const spyTransaction = jasmine.createSpyObj("Test Transaction", ['getType', 'setType', 'getAmount', 'setAmount', 'getDate', 'setDate']);
            spyTransaction['#date'] = null; // Manually add the #date property
            spyTransaction.setDate.and.callFake((date) => { spyTransaction['#date'] = date; }); // Set the #date property in the fake function
            const expectedValue = "10-01-2012";

            // Act
            testAccount.depositFunds(200, spyTransaction, "10-01-2012");

            // Assert
            expect(testAccount.getTransactions()[0]['#date']).toBe(expectedValue); // Access the #type property directly
            expect(spyTransaction.setDate).toHaveBeenCalledWith(expectedValue);
        });

        it('should be able to deposit 500 to the account', () => {
            // Arrange
            const account = new Account();
            const transaction = new Transaction;
            let fundsPaidIn = 500;

            // Act
            account.depositFunds(fundsPaidIn, transaction, "");

            // Assert
            let newBalance = account.getBalance();
            expect(newBalance).toBe(fundsPaidIn);
        })
    });

    xdescribe('withdrawFunds', () => {

        it('should subtract 100 from the balance when withdrawFunds is called.', () => {
            // Arrange
            const testAccount = new Account(200);
            const spyTransaction = jasmine.createSpyObj("Test Transaction", ['setType', 'setAmount', 'setDate']);
            const expectedValue = 100;

            // Act
            testAccount.withdrawFunds(100, spyTransaction);

            // Assert
            expect(testAccount.getBalance()).toBe(expectedValue);
        });

        it('should subtract 0.01 from the balance when withdrawFunds is called', () => {
            // Arrange
            const testAccount = new Account(200);
            const spyTransaction = jasmine.createSpyObj("Test Transaction", ['setType', 'setAmount', 'setDate']);
            const expectedValue = 199.99;

            // Act
            testAccount.withdrawFunds(0.01, spyTransaction);

            // Assert
            expect(testAccount.getBalance()).toBe(expectedValue);
        });

        it('should subtract 0 from the balance when withdrawFunds is called', () => {
            // Arrange
            const testAccount = new Account(200);
            const spyTransaction = jasmine.createSpyObj("Test Transaction", ['setType', 'setAmount', 'setDate']);
            const expectedValue = 200;

            // Act
            testAccount.withdrawFunds(0, spyTransaction);

            // Assert
            expect(testAccount.getBalance()).toBe(expectedValue);
        });

        it('should do nothing when withdrawFunds is called with a value greater than the balance and the overdraft facility is disabled', () => {
            // Arrange
            const testAccount = new Account(200);
            const expectedValue = 200;
            testAccount.setOverdraftFacility(false)

            // Act
            testAccount.withdrawFunds(300)

            // Assert
            expect(testAccount.getBalance()).toBe(expectedValue);
        });

        it('should set its respective transaction object\'s #type property to "debit"', () => {
            // Arrange
            const testAccount = new Account(300);
            const spyTransaction = jasmine.createSpyObj("Test Transaction", ['getType', 'setType', 'getAmount', 'setAmount', 'getDate', 'setDate']);
            spyTransaction['#type'] = null; // Manually add the #type property
            spyTransaction.setType.and.callFake((type) => { spyTransaction['#type'] = type; }); // Set the #type property in the fake function
            const expectedValue = "debit";

            // Act
            testAccount.withdrawFunds(200, spyTransaction);

            // Assert
            expect(testAccount.getTransactions()[0]['#type']).toBe(expectedValue); // Access the #type property directly
            expect(spyTransaction.setType).toHaveBeenCalledWith(expectedValue);
        });

        it('should set its respective transaction object\'s #date property to "14-01-2012"', () => {
            // Arrange
            const testAccount = new Account(300);
            const spyTransaction = jasmine.createSpyObj("Test Transaction", ['getType', 'setType', 'getAmount', 'setAmount', 'getDate', 'setDate']);
            spyTransaction['#date'] = null; // Manually add the #date property
            spyTransaction.setDate.and.callFake((date) => { spyTransaction['#date'] = date; }); // Set the #date property in the fake function
            const expectedValue = "14-01-2012";

            // Act
            testAccount.withdrawFunds(200, spyTransaction, "14-01-2012");

            // Assert
            expect(testAccount.getTransactions()[0]['#date']).toBe(expectedValue); // Access the #date property directly
            expect(spyTransaction.setDate).toHaveBeenCalledWith(expectedValue);
        });
    });

    xdescribe('setOverdraftFacility', () => {
        let myAccount;

        beforeEach(() => {
            myAccount = new Account();
        });

        it('should enable overdraft facility successfully', () => {
            // Act
            const result = myAccount.setOverdraftFacility(true);

            // Assert
            expect(result).toBeUndefined();
            expect(myAccount.getOverdraftFacility()).toBe(true);
        });

        it('should disable overdraft facility successfully', () => {
            // Arrange
            myAccount.setOverdraftFacility(true); // Enable overdraft initially

            // Act
            const result = myAccount.setOverdraftFacility(false);

            // Assert
            expect(result).toBeUndefined();
            expect(myAccount.getOverdraftFacility()).toBe(false);
        });

        it('should not change overdraft facility with invalid parameter', () => {
            // Act
            const result = myAccount.setOverdraftFacility(42); // Passing an invalid parameter

            // Assert
            expect(result).toBeUndefined();
            expect(myAccount.getOverdraftFacility()).toBeUndefined();
        });
    });



});