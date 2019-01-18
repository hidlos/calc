import {AdditionOperation} from '../src/app/calculator/operation-definitions/addition/addition-operation';
import {ApplyOperation} from '../src/app/calculator/operation-definitions/apply/apply-operation';
import {MultiplyOperation} from '../src/app/calculator/operation-definitions/multiply/multiply-operation';

export const fixedPositionOperationMock = new ApplyOperation();
export const firstRegisteredOperationMock = new AdditionOperation();
export const secondRegisteredOperationMock = new MultiplyOperation();

export const registeredOperationsMock = [
    fixedPositionOperationMock,
    firstRegisteredOperationMock,
    secondRegisteredOperationMock
];

export const registeredOperationsNamesMock = [
    fixedPositionOperationMock.name,
    firstRegisteredOperationMock.name,
    secondRegisteredOperationMock.name
];
