import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login';
import { SignupComponent } from './features/auth/signup/signup';
import { StudentFormComponent } from './features/student/student-form/student-form';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
   { path: 'student', component: StudentFormComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];