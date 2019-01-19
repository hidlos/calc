import {Component, OnInit} from '@angular/core';
import {CalculatorService} from './services/calculator.service';
import {Observable} from 'rxjs';
import {OperationToSchedule, ScheduledOperation} from './operation-definitions/scheduled-operation';
import {OperationName} from './operation-definitions/operation';
import {RegisteredOperationProviderService} from './services/registered-operation-provider.service';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html'
})
export class CalculatorComponent implements OnInit {

    public constructor(private readonly calculatorService: CalculatorService,
                       private readonly registeredOperationsProvider: RegisteredOperationProviderService) {
    }

    public ngOnInit(): void {
        this.calculatorService.reset();
    }

    public get scheduledOperations$(): Observable<Array<ScheduledOperation>> {
        return this.calculatorService.scheduledOperations$;
    }

    public get availableOperations(): Array<OperationName> {
        return this.registeredOperationsProvider.getRegisteredOperationNames();
    }

    public get result$(): Observable<number> {
        return this.calculatorService.result$;
    }

    public onScheduledOperation(operationToSchedule: OperationToSchedule): void {
        this.calculatorService.scheduleOperation(operationToSchedule);
    }

    public onReset(): void {
        this.calculatorService.reset();
    }

    public onCalculate(): void {
        this.calculatorService.calculate();
    }
}
