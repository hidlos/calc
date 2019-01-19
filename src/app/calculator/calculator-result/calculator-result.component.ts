import {Component, Input} from '@angular/core';
import {of} from 'rxjs';

@Component({
    selector: 'app-calculator-result',
    templateUrl: './calculator-result.component.html'
})
export class CalculatorResultComponent {
    @Input() public result$ = of(0);
}
