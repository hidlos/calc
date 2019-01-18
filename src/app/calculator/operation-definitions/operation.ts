export type OperationName = string;
export type Operand = number;

export abstract class Operation {
    public abstract name: OperationName;

    public abstract perform(firstOperand: Operand, secondOperand: Operand): number;
}
