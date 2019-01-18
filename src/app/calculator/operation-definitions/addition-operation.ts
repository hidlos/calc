import {Operation} from './operation';

export class AdditionOperation implements Operation {

    public name = 'Addition';

    public perform(firstOperand: number, secondOperand: number): number {
        return firstOperand + secondOperand;
    }
}
