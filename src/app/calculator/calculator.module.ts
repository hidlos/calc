import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CalculatorComponent} from './calculator.component';
import {RegisteredOperationsModule} from './operation-registrant/registered-operations-module';
import {CalculatorDisplayComponent} from './calculator-display/calculator-display.component';
import {FormatScheduledOperationsForDisplayPipe} from './calculator-display/format-scheduled-operations-for-display.pipe';
import {CalculatorOperationSelectorComponent} from './calculator-operation-selector/calculator-operation-selector.component';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatSelectModule} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CalculatorResultComponent} from './calculator-result/calculator-result.component';
import {CalculatorControlsComponent} from './calculator-controls/calculator-controls.component';
import {CalculatorServiceModule} from './services/calculator.service.module';
import {RegisteredOperationProviderServiceModule} from './services/registered-operation-provider.service.module';

@NgModule({
    declarations: [
        CalculatorComponent,
        CalculatorDisplayComponent,
        CalculatorOperationSelectorComponent,
        CalculatorResultComponent,
        CalculatorControlsComponent,
        FormatScheduledOperationsForDisplayPipe
    ],
    imports: [
        CommonModule,
        CalculatorServiceModule,
        RegisteredOperationsModule,
        RegisteredOperationProviderServiceModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        MatCardModule,
        MatSelectModule,
        MatListModule,
        NoopAnimationsModule
    ],
    providers: [
        FormBuilder
    ],
    exports: [CalculatorComponent]
})
export class CalculatorModule {
}
