import {Operation} from '../operation-definitions/operation';
import {CalculatorOperations} from '../calculator-operations';

export type RegistrableOperation = new() => Operation;

export class OperationRegistrant {
    public static getRegisteredOperations(): Array<Operation> {
        return CalculatorOperations.map((OperationConstructor) => new OperationConstructor());
    }
}
