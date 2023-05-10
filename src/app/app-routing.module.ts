import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
  [ { path: '', redirectTo: '/registration', pathMatch: 'full'},
    { path: 'registration', loadChildren: () => import('./core/pages/student/registration/registration-routing.module').then(m => m.RegistrationRoutingModule) }, 
    { path: 'authorization', loadChildren: () => import('./core/pages/authorization/authorization.module').then(m => m.AuthorizationModule) }, 
    { path: 'student', loadChildren: () => import('./core/pages/student/student.module').then(m => m.StudentModule) }, 
    { path: 'registration', loadChildren: () => import('./core/pages/student/registration/registration.module').then(m => m.RegistrationModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
