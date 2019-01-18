import {MultiplyOperation} from './multiply-operation';
import {Operation} from '../operation';
import {firstOperandMock, secondOperandMock} from '../../../../../test/operand-mock';

describe(MultiplyOperation.name, () => {

    let operation: Operation;

    beforeEach(() => operation = new MultiplyOperation());

    describe('when asked to instantiate operation', () => {
        it('should have name', () => {
            expect(operation.name).toBe('Multiply');
        });
    });

    describe('when ask to perform operation', () => {

        beforeEach(() => operation = new MultiplyOperation());

        it('should return the sum of two operands', () => {
            const sum = operation.perform(firstOperandMock, secondOperandMock);
            const expectedSum = firstOperandMock * secondOperandMock;
            expect(sum).toBe(expectedSum);
        });
    });
});
