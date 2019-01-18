import {InjectionToken} from '@angular/core';
import {Operation} from '../operation-definitions/operation';
import {OperationRegistrant} from './operation-registrant';
import {RegisteredOperationsModule} from './registered-operations-module';

export const RegisteredOperations = new InjectionToken<Array<Operation>>('Registered operations', {
    providedIn: RegisteredOperationsModule,
    factory: OperationRegistrant.getRegisteredOperations
});
