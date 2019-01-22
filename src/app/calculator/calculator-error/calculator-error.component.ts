import {Component, Input} from '@angular/core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-calculator-error',
    templateUrl: './calculator-error.component.html',
    styleUrls: ['./calculator-error.component.scss']
})
export class CalculatorErrorComponent {
    @Input() public error$: Observable<Error> | undefined = undefined;
}
