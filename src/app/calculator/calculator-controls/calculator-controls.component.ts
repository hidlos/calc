import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-calculator-controls',
    templateUrl: './calculator-controls.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalculatorControlsComponent {

    @Output() public calculate = new EventEmitter();
    @Output() public reset = new EventEmitter();

    public onCalculate(): void {
        this.calculate.emit();
    }

    public onReset(): void {
        this.reset.emit();
    }
}
