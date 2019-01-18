import {TestBed} from '@angular/core/testing';
import {CalculatorService} from './calculator.service';
import {RegisteredOperations} from '../operation-registrant/registered-operations';
import {fixedPositionOperationMock, registeredOperationsMock, registeredOperationsNamesMock} from '../../../../test/registered-operations-mock';
import {ScheduledOperation} from '../operation-definitions/scheduled-operation';
import {ApplyOperation} from '../operation-definitions/apply/apply-operation';
import {
    firstOperationToScheduleMock,
    fixedPositionOperationToScheduleMock,
    invalidOperationToScheduleMock,
    secondOperationToScheduleMock
} from '../../../../test/operation-to-schedule-mock';
import {firstScheduledOperationMock, fixedPositionScheduledOperationMock} from '../../../../test/scheduled-operation-mock';

describe('CalculatorService', () => {

    const operand = 10;

    let service: CalculatorService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CalculatorService,
                {provide: RegisteredOperations, useValue: registeredOperationsMock}
            ]
        });
        service = TestBed.get(CalculatorService);
    });

    describe('when instantiated', () => {
        it('should have zero result', () => {
            expect(service.result$.getValue()).toEqual(0);
        });

        it('should not one scheduled operation', () => {
            const initalScheduledOperation: ScheduledOperation = {operation: new ApplyOperation(), operand: 0};
            expect(service.scheduledOperations$.getValue()).toEqual([initalScheduledOperation]);
        });
    });

    describe('when asked for list of operations', () => {
        it('should return them', () => {
            expect(service.getListOfOperations()).toEqual(registeredOperationsNamesMock);
        });
    });

    describe('when asked to schedule operation', () => {
        it('should emit new list of scheduled operations with newly scheduled operation as first item', () => {
            service.scheduleOperation(firstOperationToScheduleMock);
            expect(service.scheduledOperations$.getValue().shift()).toEqual(firstScheduledOperationMock);
        });

        describe('and trying to add invalid operation', () => {
            it('should throw an error', () => {
                expect(() => service.scheduleOperation(invalidOperationToScheduleMock)).toThrow();
            });
        });

        describe('and operation has fixed position', () => {

            beforeEach(simulateSchedulingTwoOperationsWithResultOf200);

            it('should schedule operation to that particular position', () => {
                service.scheduleOperation(fixedPositionOperationToScheduleMock);
                const positionInArray = service.scheduledOperations$.getValue().length - 1;
                expect(service.scheduledOperations$.getValue()[positionInArray]).toEqual(fixedPositionScheduledOperationMock);
            });
        });
    });

    describe('when asked to reset', () => {

        beforeEach(simulateSchedulingTwoOperationsWithResultOf200);

        it('should set scheduled operations to initial', () => {
            expect(service.scheduledOperations$.getValue().length).toBe(3);
            service.reset();
            expect(service.scheduledOperations$.getValue().length).toBe(1);
        });

        it('should set result to 0', () => {
            service.reset();
            expect(service.result$.getValue()).toBe(0);
        });
    });

    describe('when asked to calculate', () => {

        beforeEach(simulateSchedulingTwoOperationsWithResultOf200);

        it('should set proper result', () => {
            service.calculate();
            expect(service.result$.getValue()).toBe(200);
        });
    });

    function simulateSchedulingTwoOperationsWithResultOf200(): void {
        service.scheduleOperation(firstOperationToScheduleMock);
        service.scheduleOperation(secondOperationToScheduleMock);
    }
});
