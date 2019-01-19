import {Component, Input} from '@angular/core';
import {ScheduledOperation} from '../operation-definitions/scheduled-operation';
import {EMPTY, Observable} from 'rxjs';

@Component({
    selector: 'app-calculator-display',
    templateUrl: './calculator-display.component.html'
})
export class CalculatorDisplayComponent {
    @Input() public scheduledOperations$: Observable<Array<ScheduledOperation>> = EMPTY;
}
