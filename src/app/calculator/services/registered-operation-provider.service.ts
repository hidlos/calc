import {Inject, Injectable} from '@angular/core';
import {Operation, OperationName} from '../operation-definitions/operation';
import {RegisteredOperations} from '../operation-registrant/registered-operations';
import {InvalidOperationError} from '../errors/invalid-operation-error';
import {RegisteredOperationProviderServiceModule} from './registered-operation-provider.service.module';

@Injectable({
    providedIn: RegisteredOperationProviderServiceModule
})
export class RegisteredOperationProviderService {

    public constructor(@Inject(RegisteredOperations) private readonly registeredOperations: Array<Operation>) {
    }

    public getRegisteredOperationNames(): Array<OperationName> {
        return this.registeredOperations.map((operation) => operation.name);
    }

    public getRegisteredOperation(operationName: OperationName): Operation {
        const operation = this.registeredOperations.find((op) => op.name === operationName);
        if (!operation) {
            throw new InvalidOperationError(operationName);
        }
        return operation;
    }
}
