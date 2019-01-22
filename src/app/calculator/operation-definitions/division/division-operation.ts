import {Operation} from '../operation';

export class DivisionOperation extends Operation {

    public name = 'Division';

    public perform(firstOperand: number, secondOperand: number): number {
        if (secondOperand === 0) {
            throw new Error(`You can't divide by zero.`);
        }
        return firstOperand / secondOperand;
    }
}
