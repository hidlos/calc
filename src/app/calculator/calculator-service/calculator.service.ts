import {CalculatorServiceModule} from './calculator-service.module';
import {Inject, Injectable} from '@angular/core';
import {Operand, Operation, OperationName} from '../operation-definitions/operation';
import {RegisteredOperations} from '../operation-registrant/registered-operations';
import {BehaviorSubject} from 'rxjs';
import {InvalidOperationError} from '../errors/invalid-operation-error';
import {OperationToSchedule, ScheduledFixedPositionOperation, ScheduledOperation} from '../operation-definitions/scheduled-operation';
import {ApplyOperation} from '../operation-definitions/apply/apply-operation';

@Injectable({
    providedIn: CalculatorServiceModule
})
export class CalculatorService {

    private scheduledOperations: Array<ScheduledOperation> = this.initialScheduledOperations;
    private static initialResult = 0;

    public result$ = new BehaviorSubject(CalculatorService.initialResult);
    public scheduledOperations$ = new BehaviorSubject(this.scheduledOperations);

    public constructor(@Inject(RegisteredOperations) private readonly registeredOperations: Array<Operation>) {
    }

    public getListOfOperations(): Array<OperationName> {
        return this.registeredOperations.map((operation) => operation.name);
    }

    public scheduleOperation(operationToSchedule: OperationToSchedule): void {
        const registeredOperation = this.getRegisteredOperation(operationToSchedule.operationName);
        this.addOperationToScheduled(registeredOperation, operationToSchedule.operand);
        this.scheduledOperations$.next(this.scheduledOperations);
    }

    public reset(): void {
        this.scheduledOperations = this.initialScheduledOperations;
        this.scheduledOperations$.next(this.scheduledOperations);
        this.result$.next(CalculatorService.initialResult);
    }

    public calculate(): void {
        let count = 0;
        for (let operationIndex = this.scheduledOperations.length - 1; operationIndex >= 0; operationIndex--) {
            const operation = this.scheduledOperations[operationIndex].operation;
            const operand = this.scheduledOperations[operationIndex].operand;
            count = operation.perform(count, operand)
        }
        this.result$.next(count);
    }

    private addOperationToScheduled(operation: Operation, operand: Operand): void {
        const scheduledOperation = {operation, operand};
        this.isScheduledFixedPositionOperation(scheduledOperation) ?
            this.addFixedPositionOperationToScheduled(scheduledOperation) :
            this.scheduledOperations = [scheduledOperation, ...this.scheduledOperations];
    }

    private addFixedPositionOperationToScheduled(scheduledOperation: ScheduledFixedPositionOperation): void {
        const copyOfScheduledOperations = [...this.scheduledOperations];
        console.log(this.getPositionInScheduledOperations(scheduledOperation));
        copyOfScheduledOperations[this.getPositionInScheduledOperations(scheduledOperation)] = scheduledOperation;
        this.scheduledOperations = copyOfScheduledOperations;
    }

    private getRegisteredOperation(operationName: OperationName): Operation {
        const operation = this.registeredOperations.find((operation) => operation.name === operationName);
        if (!operation) {
            throw new InvalidOperationError(operationName);
        }
        return operation;
    }

    private isScheduledFixedPositionOperation(scheduledOperation: ScheduledOperation): scheduledOperation is ScheduledFixedPositionOperation {
        return !!scheduledOperation.operation.fixedPosition;
    }

    private get initialScheduledOperations(): Array<ScheduledOperation> {
        return [{operation: new ApplyOperation(), operand: 0}]
    }

    private getPositionInScheduledOperations(scheduledOperation: ScheduledFixedPositionOperation): number {
        return this.scheduledOperations.length - scheduledOperation.operation.fixedPosition;
    }
}
