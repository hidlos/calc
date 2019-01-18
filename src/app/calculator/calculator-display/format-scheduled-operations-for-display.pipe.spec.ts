import {FormatScheduledOperationsForDisplayPipe} from './format-scheduled-operations-for-display.pipe';
import {scheduledOperationMock} from '../../../../test/scheduled-operation-mock';

fdescribe('FormatScheduledOperationsForDisplayPipe', () => {
    describe('when asked to transform', () => {
        it('should transform it', () => {
            const pipe = new FormatScheduledOperationsForDisplayPipe();
            const result = pipe.transform(scheduledOperationMock);
            const expectedResult = `${scheduledOperationMock.operation.name} ${scheduledOperationMock.operand}`;
            expect(result).toBe(expectedResult);
        });
    });
});
