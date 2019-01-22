import {Pipe, PipeTransform} from '@angular/core';
import {ScheduledOperation} from '../operation-definitions/scheduled-operation';

@Pipe({
    name: 'printProperty'
})
export class PrintPropertyPipe implements PipeTransform {
    transform(object: { [key: string]: string }, propertyName: string): string {
        return object[propertyName];
    }
}
