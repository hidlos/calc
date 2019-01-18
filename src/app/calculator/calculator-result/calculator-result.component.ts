import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-calculator-result',
    templateUrl: './calculator-result.component.html'
})
export class CalculatorResultComponent {
    @Input() public result: number = 0;
}
