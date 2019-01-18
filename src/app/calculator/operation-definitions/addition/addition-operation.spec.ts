import {AdditionOperation} from './addition-operation';
import {Operation} from '../operation';
import {firstOperandMock, secondOperandMock} from '../../../../../test/operand-mock';

describe(AdditionOperation.name, () => {

    let operation: Operation;

    beforeEach(() => operation = new AdditionOperation());

    describe('when asked to instantiate operation', () => {
        it('should have name', () => {
            expect(operation.name).toBe('Addition');
        });
    });

    describe('when ask to perform operation', () => {

        beforeEach(() => operation = new AdditionOperation());

        it('should return the sum of two operands', () => {
            const sum = operation.perform(firstOperandMock, secondOperandMock);
            const expectedSum = firstOperandMock + secondOperandMock;
            expect(sum).toBe(expectedSum);
        });
    });
});
