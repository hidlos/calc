import {FixedPositionOperation, Operand, Operation, OperationName} from './operation';

export interface ScheduledOperation {
    operation: Operation;
    operand: Operand;
}
export interface ScheduledFixedPositionOperation {
    operation: FixedPositionOperation;
    operand: Operand;
}

export interface OperationToSchedule {
    operationName: OperationName;
    operand: Operand;
}
