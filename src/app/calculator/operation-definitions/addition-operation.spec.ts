import {AdditionOperation} from './addition-operation';
import {Operation} from './operation';

describe(AdditionOperation.name, () => {

    let operation: Operation;

    beforeEach(() => operation = new AdditionOperation());

    describe('when asked to instantiate operation', () => {
        it('should have name', () => {
            expect(operation.name).toBe('Addition');
        });
    });

    describe('when ask to perform operation', () => {

        const firstOperand = 10;
        const secondOperand = 20;

        beforeEach(() => operation = new AdditionOperation());

        it('should return the sum of two operands', () => {
            const sum = operation.perform(firstOperand, secondOperand);
            const expectedSum = firstOperand + secondOperand;
            expect(sum).toBe(expectedSum);
        });
    });
});
