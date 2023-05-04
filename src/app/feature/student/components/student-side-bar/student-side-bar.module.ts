import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { ItemComponent } from './item/item.component';
import { StudentSideBarComponent } from './student-side-bar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoursesCardComponent } from './courses-card/courses-card.component';


@NgModule({
  declarations: [
    ItemComponent,
    StudentSideBarComponent,
    CoursesCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatSlideToggleModule,
    MatCheckboxModule
  ],
  exports: [
    StudentSideBarComponent,
    MatCheckboxModule
  ]
})
export class StudentSideBarModule { }
