import {firstRegisteredOperationMock, registeredOperationsMock, registeredOperationsNamesMock} from '../../../../test/registered-operations-mock';
import {RegisteredOperationProviderService} from './registered-operation-provider.service';
import {TestBed} from '@angular/core/testing';
import {RegisteredOperations} from '../operation-registrant/registered-operations';

describe(RegisteredOperationProviderService.name, () => {

    let provider: RegisteredOperationProviderService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RegisteredOperationProviderService,
                {provide: RegisteredOperations, useValue: registeredOperationsMock}
            ]
        });
        provider = TestBed.get(RegisteredOperationProviderService);
    });

    describe('when asked to get registered operation names', () => {
        it('should return them', () => {
            expect(provider.getRegisteredOperationNames()).toEqual(registeredOperationsNamesMock);
        });
    });

    describe('when asked to get registered operation', () => {
        it('should return it', () => {
            const operation = provider.getRegisteredOperation(firstRegisteredOperationMock.name);
            expect(operation).toEqual(firstRegisteredOperationMock);
        });

        describe('and trying to add invalid operation', () => {
            it('should throw an error', () => {
                const nonRegisteredOperationName = 'nonRegisteredOperationName';
                expect(() => provider.getRegisteredOperation(nonRegisteredOperationName)).toThrow();
            });
        });
    });
});
