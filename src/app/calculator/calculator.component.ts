import {Component, OnInit} from '@angular/core';
import {CalculatorService} from './calculator-service/calculator.service';
import {Observable} from 'rxjs';
import {OperationToSchedule, ScheduledOperation} from './operation-definitions/scheduled-operation';
import {OperationName} from './operation-definitions/operation';

@Component({
    selector: 'app-calculator',
    templateUrl: './calculator.component.html'
})
export class CalculatorComponent implements OnInit {

    public constructor(private readonly calculatorService: CalculatorService) {
    }

    public ngOnInit(): void {
        this.calculatorService.reset();
    }

    public get scheduledOperations(): Observable<Array<ScheduledOperation>> {
        return this.calculatorService.scheduledOperations$;
    }

    public get availableOperations(): Array<OperationName> {
        return this.calculatorService.getListOfOperations();
    }

    public get result(): Observable<number> {
        return this.calculatorService.result$;
    }

    public onScheduledOperation(operationToSchedule: OperationToSchedule): void {
        this.calculatorService.scheduleOperation(operationToSchedule);
    }

    public onReset(): void {
        console.log('zde');
        this.calculatorService.reset();
    }

    public onCalculate(): void {
        this.calculatorService.calculate()
    }
}
