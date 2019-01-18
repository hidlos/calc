export type OperationName = string;
export type Operand = number;

export abstract class Operation {
    public fixedPosition: number | undefined = undefined;

    public abstract name: OperationName;

    public abstract perform(firstOperand: Operand, secondOperand: Operand): number;
}

export abstract class FixedPositionOperation extends Operation {
    public abstract fixedPosition: number;
}
