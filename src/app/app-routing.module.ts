import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
  [ 
    { path: '', redirectTo: '/student', pathMatch: 'full'},
    { path: 'authorization', loadChildren: () => import('./core/pages/authorization/authorization.module').then(m => m.AuthorizationModule) },
    { path: 'registration', loadChildren: () => import('./core/pages/registration/registration.module').then(m => m.RegistrationModule) },
    { path: 'student', loadChildren: () => import('./core/pages/student/student.module').then(m => m.StudentModule) }, 
    { path: 'methodist', loadChildren: () => import('./core/pages/methodist/methodist.module').then(m => m.MethodistModule) },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
