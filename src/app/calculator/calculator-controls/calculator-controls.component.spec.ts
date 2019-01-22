import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CalculatorControlsComponent} from './calculator-controls.component';
import {ClickableElement, getElementById} from 'test/element-getter';

describe(CalculatorControlsComponent.name, () => {
    let component: CalculatorControlsComponent;
    let fixture: ComponentFixture<CalculatorControlsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CalculatorControlsComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(CalculatorControlsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('when user click to reset', () => {
        it('should emit reset event', () => {
            spyOn(component.reset, 'emit').and.callThrough();
            getButton('reset').click();
            expect(component.reset.emit).toHaveBeenCalled();
        });
    });

    describe('when user click to calculate', () => {
        it('should emit calculate event', () => {
            spyOn(component.calculate, 'emit').and.callThrough();
            getButton('calculate').click();
            expect(component.calculate.emit).toHaveBeenCalled();
        });
    });

    function getButton(id: 'reset' | 'calculate'): ClickableElement {
        return getElementById<ClickableElement>(fixture, id);
    }

});

