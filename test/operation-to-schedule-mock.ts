import {OperationToSchedule} from '../src/app/calculator/operation-definitions/scheduled-operation';
import {firstRegisteredOperationMock, fixedPositionOperationMock, secondRegisteredOperationMock} from './registered-operations-mock';
import {firstOperandMock, secondOperandMock} from './operand-mock';

export const firstOperationToScheduleMock: OperationToSchedule = {
    operationName: firstRegisteredOperationMock.name,
    operand: firstOperandMock
};

export const secondOperationToScheduleMock: OperationToSchedule = {
    operationName: secondRegisteredOperationMock.name,
    operand: secondOperandMock
};

export const invalidOperationToScheduleMock: OperationToSchedule = {
    operationName: 'invalidOperationName',
    operand: 10
};

export const fixedPositionOperationToScheduleMock: OperationToSchedule = {
    operationName: fixedPositionOperationMock.name,
    operand: firstOperandMock
};
