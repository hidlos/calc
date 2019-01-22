import {CalculatorServiceModule} from './calculator.service.module';
import {Injectable} from '@angular/core';
import {Operand, Operation} from '../operation-definitions/operation';
import {BehaviorSubject} from 'rxjs';
import {OperationToSchedule, ScheduledFixedPositionOperation, ScheduledOperation} from '../operation-definitions/scheduled-operation';
import {ApplyOperation} from '../operation-definitions/apply/apply-operation';
import {RegisteredOperationProviderService} from './registered-operation-provider.service';

@Injectable({
    providedIn: CalculatorServiceModule
})
export class CalculatorService {

    private static initialResult = 0;
    private scheduledOperations: Array<ScheduledOperation> = this.initialScheduledOperations;

    public result$ = new BehaviorSubject<number>(CalculatorService.initialResult);
    public error$ = new BehaviorSubject<Error | undefined>(undefined);
    public scheduledOperations$ = new BehaviorSubject(this.initialScheduledOperations);

    public constructor(private readonly registeredOperationsProvider: RegisteredOperationProviderService) {
    }

    public scheduleOperation(operationToSchedule: OperationToSchedule): void {
        const registeredOperation = this.registeredOperationsProvider.getRegisteredOperation(operationToSchedule.operationName);
        this.addOperationToScheduled(registeredOperation, operationToSchedule.operand);
        this.scheduledOperations$.next(this.scheduledOperations);
    }

    public reset(): void {
        this.scheduledOperations = this.initialScheduledOperations;
        this.scheduledOperations$.next(this.scheduledOperations);
        this.result$.next(CalculatorService.initialResult);
        this.error$.next(undefined);
    }

    public calculate(): void {
        try {
            this.processOperations();
        } catch (e) {
        }
    }

    private processOperations(): void {
        let count = 0;
        for (let operationIndex = this.scheduledOperations.length - 1; operationIndex >= 0; operationIndex--) {
            count = this.processOperation(count, operationIndex);
        }
        this.result$.next(count);
    }

    private processOperation(input: number, operationIndex: number): number {
        try {
            return this.performOperation(input, operationIndex);
        } catch (error) {
            this.error$.next(error);
            throw error;
        }
    }

    private performOperation(input: number, operationIndex: number): number {
        const operation = this.scheduledOperations[operationIndex].operation;
        const operand = this.scheduledOperations[operationIndex].operand;
        return operation.perform(input, operand);
    }

    private addOperationToScheduled(operation: Operation, operand: Operand): void {
        const scheduledOperation = {operation, operand};
        this.isScheduledFixedPositionOperation(scheduledOperation) ?
            this.addFixedPositionOperationToScheduled(scheduledOperation) :
            this.scheduledOperations = [scheduledOperation, ...this.scheduledOperations];
    }

    private addFixedPositionOperationToScheduled(scheduledOperation: ScheduledFixedPositionOperation): void {
        const copyOfScheduledOperations = [...this.scheduledOperations];
        copyOfScheduledOperations[this.getPositionInScheduledOperations(scheduledOperation)] = scheduledOperation;
        this.scheduledOperations = copyOfScheduledOperations;
    }

    private isScheduledFixedPositionOperation(scheduledOperation: ScheduledOperation): scheduledOperation is ScheduledFixedPositionOperation {
        return !!scheduledOperation.operation.fixedPosition;
    }

    private getPositionInScheduledOperations(scheduledOperation: ScheduledFixedPositionOperation): number {
        return this.scheduledOperations.length - scheduledOperation.operation.fixedPosition;
    }

    private get initialScheduledOperations(): Array<ScheduledOperation> {
        return [{operation: new ApplyOperation(), operand: 0}];
    }
}
