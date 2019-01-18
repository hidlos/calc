import {ScheduledFixedPositionOperation, ScheduledOperation} from '../src/app/calculator/operation-definitions/scheduled-operation';
import {firstRegisteredOperationMock, fixedPositionOperationMock} from './registered-operations-mock';
import {firstOperandMock} from './operand-mock';

export const firstScheduledOperationMock: ScheduledOperation = {
    operation: firstRegisteredOperationMock,
    operand: firstOperandMock
};

export const fixedPositionScheduledOperationMock: ScheduledFixedPositionOperation = {
    operation: fixedPositionOperationMock,
    operand: firstOperandMock
};
