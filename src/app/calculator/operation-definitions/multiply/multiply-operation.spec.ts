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
        it('should return the multiple of two operands', () => {
            const multiple = operation.perform(firstOperandMock, secondOperandMock);
            const expectedMultiple = firstOperandMock * secondOperandMock;
            expect(multiple).toBe(expectedMultiple);
        });
    });
});
