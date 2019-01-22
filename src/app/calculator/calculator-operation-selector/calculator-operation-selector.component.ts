import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OperationName} from '../operation-definitions/operation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {OperationToSchedule} from '../operation-definitions/scheduled-operation';

@Component({
    selector: 'app-calculator-operation-selector',
    templateUrl: './calculator-operation-selector.component.html'
})
export class CalculatorOperationSelectorComponent {
    @Input() public availableOperations: Array<OperationName> = [];
    @Output() public scheduledOperation = new EventEmitter<OperationToSchedule>();

    public selectOperation: FormGroup;

    public constructor(formBuilder: FormBuilder) {
        this.selectOperation = formBuilder.group(this.formControlsConfig);
    }

    public addOperation(): void {
        if (this.selectOperation.valid) {
            this.scheduledOperation.emit(this.buildOperationToSchedule());
        }
    }

    private get formControlsConfig(): { [key: string]: unknown } {
        return {
            operation: [''],
            operand: ['', [Validators.required, Validators.pattern('[0-9]*')]]
        };
    }

    private buildOperationToSchedule(): OperationToSchedule {
        return {
            operationName: this.selectOperation.get('operation')!.value,
            operand: Number(this.selectOperation.get('operand')!.value)
        };
    }
}
