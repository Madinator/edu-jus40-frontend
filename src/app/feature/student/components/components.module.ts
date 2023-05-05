import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentSideBarModule } from './student-side-bar/student-side-bar.module';
import { CoursesCardComponent } from './courses-card/courses-card.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ResponsiblesCardComponent } from './responsibles-card/responsibles-card.component';
import { CoursesCatalogButtonComponent } from './courses-catalog-button/courses-catalog-button.component';

@NgModule({
  declarations: [
    CoursesCardComponent,
    ResponsiblesCardComponent,
    CoursesCatalogButtonComponent
  ],
  imports: [
    CommonModule,
    StudentSideBarModule,
    SharedModule
  ],
  exports: [
    StudentSideBarModule,
    CoursesCardComponent,
    ResponsiblesCardComponent,
    CoursesCatalogButtonComponent
  ]
})
export class ComponentsModule { }
