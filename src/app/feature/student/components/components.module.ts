import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSideBarModule } from './student-side-bar/student-side-bar.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StudentSideBarModule
  ],
  exports: [
    StudentSideBarModule
  ]
})
export class ComponentsModule { }
