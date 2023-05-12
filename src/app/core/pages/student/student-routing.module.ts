import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/student/registration', pathMatch: 'full'},
  { path: 'registration', loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule) }, 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
