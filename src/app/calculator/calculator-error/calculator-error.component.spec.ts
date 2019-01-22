import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CalculatorErrorComponent} from './calculator-error.component';
import {getElementByClass, HtmlElement} from '../../../../test/element-getter';
import {By} from '@angular/platform-browser';
import {of} from 'rxjs';
import {PrintPropertyPipe} from './print-property.pipe';

describe('CalculatorErrorComponent', () => {

    const calculatorErrorClassName = '.calculateError';

    let component: CalculatorErrorComponent;
    let fixture: ComponentFixture<CalculatorErrorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CalculatorErrorComponent,
                PrintPropertyPipe
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorErrorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not print any error', () => {
        const notAnElement = fixture.debugElement.query(By.css(calculatorErrorClassName)) as unknown;
        expect(notAnElement).toBe(null);
    });

    describe('when some error has been emitted', () => {

        const errorMessage = 'someErrorMessage';

        beforeEach(simulateEmittingError);

        it('should show it', () => {
            const errorElement = getElementByClass<HtmlElement>(fixture, '.calculateError');
            expect(errorElement.innerText).toBe(errorMessage);
        });

        function simulateEmittingError(): void {
            component.error$ = of(new Error(errorMessage));
            fixture.detectChanges();
        }
    });
});
