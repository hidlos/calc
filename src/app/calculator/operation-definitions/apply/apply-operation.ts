import {FixedPositionOperation} from '../operation';

export class ApplyOperation extends FixedPositionOperation {

    public name = 'Apply';
    public fixedPosition = 1;

    public perform(firstOperand: number, secondOperand: number): number {
        return secondOperand;
    }
}
