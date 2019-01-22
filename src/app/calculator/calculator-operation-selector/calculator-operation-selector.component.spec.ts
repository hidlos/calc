import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {CalculatorOperationSelectorComponent} from './calculator-operation-selector.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatSelectModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {ClickableElement, getElementByClass, HtmlElementContainer, MatOptionList} from '../../../../test/element-getter';
import {OverlayContainer} from '@angular/cdk/overlay';

describe('CalculatorOperationSelectorComponent', () => {
    let component: CalculatorOperationSelectorComponent;
    let fixture: ComponentFixture<CalculatorOperationSelectorComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalculatorOperationSelectorComponent],
            imports: [
                ReactiveFormsModule,
                MatInputModule,
                MatButtonModule,
                MatCardModule,
                MatSelectModule,
                MatListModule,
                NoopAnimationsModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorOperationSelectorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('it should have only one option in select equal to `none`', () => {

        let matOptionList: MatOptionList;

        beforeEach(prepareOverlayElement);

        it('should have select box with operations', () => {
            simulateOpeningSelectBox();
            const options = matOptionList.querySelectorAll('mat-option');
            expect(options.length).toBe(1);
            expect((options[0] as any).innerText).toBe('none\n');
        });

        function simulateOpeningSelectBox(): void {
            getElementByClass<ClickableElement>(fixture, '.mat-select-trigger').click();
            fixture.detectChanges();
        }

        function prepareOverlayElement() {
            const getElement = (oc: HtmlElementContainer) => matOptionList = oc.getContainerElement<MatOptionList>();
            inject([OverlayContainer], getElement)();
        }
    });
});
