import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServicesModule } from './services/services.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServicesModule
  ],
  exports: [
    ServicesModule
  ]
})
export class CoreModule { }
