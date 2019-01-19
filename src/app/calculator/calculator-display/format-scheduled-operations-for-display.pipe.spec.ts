import {FormatScheduledOperationsForDisplayPipe} from './format-scheduled-operations-for-display.pipe';
import {firstScheduledOperationMock} from '../../../../test/scheduled-operation-mock';

describe('FormatScheduledOperationsForDisplayPipe', () => {
    describe('when asked to transform', () => {
        it('should transform it', () => {
            const result = new FormatScheduledOperationsForDisplayPipe().transform(firstScheduledOperationMock);
            const expectedResult = `${firstScheduledOperationMock.operation.name} ${firstScheduledOperationMock.operand}`;
            expect(result).toBe(expectedResult);
        });
    });
});
