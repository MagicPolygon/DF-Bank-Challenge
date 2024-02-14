import StatementPrinter from "../src/StatementPrinter.js";

xdescribe('StatementPrinter tests', () => {

    describe('printStatement', () => {

        it('should log a table header row', () => {
            // Arrange
            const logSpy = spyOn(console, `log`);

            // Act
            StatementPrinter.printStatement();

            // Assert
            expect(logSpy).toHaveBeenCalledTimes(1);
            expect(logSpy).toHaveBeenCalledWith(`date       || credit  || debit  || balance`);

        });

        it('should log once for each transaction', () => {
            // Arrange
            const logSpy = spyOn(console, `log`);
            const spyAccount = jasmine.createSpyObj("Test Account", ['depositFunds']);
            spyAccount.depositFunds.and.callFake((type) => { spyTransaction['#type'] = type; }); // Set the #type property in the fake function

            // Act
            StatementPrinter.printStatement(spyAccount);

            // Assert
            expect(logSpy).toHaveBeenCalledTimes(3);
            expect(logSpy).toHaveBeenCalledWith(`date       || credit  || debit  || balance`);

        });
    });
});