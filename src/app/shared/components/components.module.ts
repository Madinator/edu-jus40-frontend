import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgModule } from './svg/svg.module';
import { BaseModule } from './base/base.module';
import { ExpanderComponent } from './expander/expander.component';
import { MaterialModule } from './material/material.module';
import { PagesModule } from './pages/pages.module';

@NgModule({
  declarations: [
    ExpanderComponent,
  ],
  imports: [
    CommonModule,
    SvgModule,
    BaseModule,
    MaterialModule,
    PagesModule,
  ],
  exports: [
    SvgModule,
    BaseModule,
    ExpanderComponent,
    MaterialModule,
    PagesModule,
  ],
})
export class ComponentsModule { }
