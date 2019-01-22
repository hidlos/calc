import {Operation} from '../operation';
import {firstOperandMock, secondOperandMock} from '../../../../../test/operand-mock';
import {DivisionOperation} from './division-operation';

describe(DivisionOperation.name, () => {

    let operation: Operation;

    beforeEach(() => operation = new DivisionOperation());

    describe('when asked to instantiate operation', () => {
        it('should have name', () => {
            expect(operation.name).toBe('Division');
        });
    });

    describe('when ask to perform operation', () => {
        it('should return the division of two operands', () => {
            const division = operation.perform(firstOperandMock, secondOperandMock);
            const expectedDivision = firstOperandMock / secondOperandMock;
            expect(division).toBe(expectedDivision);
        });

        describe('and we are trying to divide by zero', () => {
            it('should throw', () => {
                expect(() => operation.perform(firstOperandMock, 0)).toThrow();
            });
        });
    });
});
