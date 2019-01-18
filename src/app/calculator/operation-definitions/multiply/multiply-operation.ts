import {Operation} from '../operation';

export class MultiplyOperation extends Operation {

    public name = 'Multiply';

    public perform(firstOperand: number, secondOperand: number): number {
        return firstOperand * secondOperand;
    }
}
