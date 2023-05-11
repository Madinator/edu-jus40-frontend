import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { RegistrationComponent } from './registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatureModule } from 'src/app/feature/feature.module';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    SharedModule,
    FeatureModule,
    MatFormFieldModule,
    RegistrationRoutingModule
  ]
})
export class RegistrationModule { }
