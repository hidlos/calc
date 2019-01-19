import {OperationRegistrant} from './operation-registrant';
import {Operation} from '../operation-definitions/operation';
import {CalculatorOperations} from '../calculator-operations';

describe(OperationRegistrant.name, () => {
    describe('when asked to get registered operations', () => {
        it('should return registered operations', () => {
            const registeredOperations = OperationRegistrant.getRegisteredOperations();
            expect(registeredOperations).toEqual(getExpectedRegisteredOperations());
        });

        function getExpectedRegisteredOperations(): Array<Operation> {
            return CalculatorOperations.map((OperationConstructor) => new OperationConstructor());
        }
    });
});
