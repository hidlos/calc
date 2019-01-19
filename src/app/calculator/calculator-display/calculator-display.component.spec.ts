import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {getElementByClass, HtmlElement, MatList} from 'test/element-getter';
import {CalculatorDisplayComponent} from './calculator-display.component';
import {MatCardModule, MatListModule} from '@angular/material';
import {FormatScheduledOperationsForDisplayPipe} from './format-scheduled-operations-for-display.pipe';
import {firstScheduledOperationMock} from '../../../../test/scheduled-operation-mock';
import {of} from 'rxjs';

describe(CalculatorDisplayComponent.name, () => {
    let component: CalculatorDisplayComponent;
    let fixture: ComponentFixture<CalculatorDisplayComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CalculatorDisplayComponent,
                FormatScheduledOperationsForDisplayPipe
            ],
            imports: [
                MatCardModule,
                MatListModule
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorDisplayComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should not have any scheduled operation', () => {
        expect(getScheduledOperationList().length).toBe(0);
    });

    describe('when list of scheduled operations updates', () => {

        beforeEach(() => {
            component.scheduledOperations$ = of([firstScheduledOperationMock]);
            fixture.detectChanges();
        });

        it('should update view', () => {
            const operations = getScheduledOperationList();
            const operationCaption = new FormatScheduledOperationsForDisplayPipe().transform(firstScheduledOperationMock);
            expect(operations.length).toBe(1);
            expect(operations[0].innerText).toBe(operationCaption);
        });
    });

    function getScheduledOperationList(): Array<HtmlElement> {
        const list = getElementByClass<MatList>(fixture, 'mat-list');
        return list.querySelectorAll('mat-list-item');
    }
});
