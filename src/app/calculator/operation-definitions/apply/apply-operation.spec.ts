import {ApplyOperation} from './apply-operation';
import {FixedPositionOperation} from '../operation';
import {firstOperandMock, secondOperandMock} from '../../../../../test/operand-mock';

describe(ApplyOperation.name, () => {

    let operation: FixedPositionOperation;

    beforeEach(() => operation = new ApplyOperation());

    describe('when asked to instantiate operation', () => {
        it('should have name', () => {
            expect(operation.name).toBe('Apply');
        });

        it('should have fixed position set to 1', () => {
            expect(operation.fixedPosition).toBe(1);
        });
    });

    describe('when ask to perform operation', () => {
        it('should always return second operand', () => {
            const expectedOperand = operation.perform(firstOperandMock, secondOperandMock);
            expect(expectedOperand).toBe(secondOperandMock);
        });
    });
});
