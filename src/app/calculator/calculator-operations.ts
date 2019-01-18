import {AdditionOperation} from './operation-definitions/addition/addition-operation';
import {RegistrableOperation} from './operation-registrant/operation-registrant';
import {ApplyOperation} from './operation-definitions/apply/apply-operation';
import {MultiplyOperation} from './operation-definitions/multiply/multiply-operation';

export const CalculatorOperations: Array<RegistrableOperation> = [
    AdditionOperation,
    ApplyOperation,
    MultiplyOperation
];
