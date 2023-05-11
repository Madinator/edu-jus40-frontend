import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MethodistRoutingModule } from './methodist-routing.module';
import { MethodistComponent } from './methodist.component';


@NgModule({
  declarations: [
    MethodistComponent
  ],
  imports: [
    CommonModule,
    MethodistRoutingModule,
  ]
})
export class MethodistModule { }
