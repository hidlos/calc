import {Pipe, PipeTransform} from '@angular/core';
import {ScheduledOperation} from '../operation-definitions/scheduled-operation';

@Pipe({
    name: 'formatScheduledOperationsForDisplay'
})
export class FormatScheduledOperationsForDisplayPipe implements PipeTransform {
    transform(scheduledOperation: ScheduledOperation): string {
        return `${scheduledOperation.operation.name} ${scheduledOperation.operand}`;
    }
}
