import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {getElementByClass, HtmlElement} from 'test/element-getter';
import {MatCardModule, MatListModule} from '@angular/material';
import {of} from 'rxjs';
import {CalculatorResultComponent} from './calculator-result.component';

describe(CalculatorResultComponent.name, () => {
    let component: CalculatorResultComponent;
    let fixture: ComponentFixture<CalculatorResultComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalculatorResultComponent],
            imports: [
                MatCardModule,
                MatListModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorResultComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have result set to 0', () => {
        expect(getResultElement().innerText).toBe(buildResultText(0));
    });

    describe('when result updates', () => {

        const result = 22;

        beforeEach(() => {
            component.result$ = of(result);
            fixture.detectChanges();
        });

        it('should update view', () => {
            expect(getResultElement().innerText).toContain(buildResultText(result));
        });
    });

    function getResultElement(): HtmlElement {
        return getElementByClass<HtmlElement>(fixture, 'mat-list-item');
    }

    function buildResultText(result: number): string {
        return `Result : ${result}`;
    }
});
