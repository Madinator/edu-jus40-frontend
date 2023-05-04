import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentModule } from './student/student.module';
import { MethodistModule } from './metodist/methodist.module';
import { CuratorModule } from './curator/curator.module';
import { HeadTeacherModule } from './head-teacher/head-teacher.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StudentModule,
    MethodistModule,
    CuratorModule,
    HeadTeacherModule
  ],
  exports: [
    StudentModule,
    MethodistModule,
    CuratorModule,
    HeadTeacherModule
  ]
})
export class FeatureModule { }
