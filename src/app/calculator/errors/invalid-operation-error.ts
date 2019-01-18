import {OperationName} from '../operation-definitions/operation';

export class InvalidOperationError extends Error {
    public constructor(operationName: OperationName) {
        super(`You are trying to add invalid operation: '${operationName}`);
    }
}
