import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-calculator-controls',
    templateUrl: './calculator-controls.component.html'
})
export class CalculatorControlsComponent {

    @Output('calculate') public calculateTrigger = new EventEmitter();
    @Output('reset') public resetTrigger = new EventEmitter();

    public calculate(): void {
        this.calculateTrigger.emit();
    }

    public reset(): void {
        this.resetTrigger.emit();
    }
}
