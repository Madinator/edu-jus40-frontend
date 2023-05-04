import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FormFieldComponent } from './form-field/form-field.component';
import { InputComponent } from './input/input.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputWithMaskComponent } from './input-with-mask/input-with-mask.component';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [
    FormFieldComponent,
    InputComponent,
    InputPasswordComponent,
    InputWithMaskComponent,
    SelectComponent,
  ],
  imports: [
    CommonModule,
    NgxMaskDirective,
    FormsModule,
    ReactiveFormsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormFieldComponent,
    InputComponent,
    InputPasswordComponent,
    InputWithMaskComponent,
    SelectComponent,
  ],
  providers: [provideNgxMask()]

})
export class BaseModule { }
