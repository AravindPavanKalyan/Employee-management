import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent, data: { animation: 'signupPage', title: 'Sign up' } },
  { path: 'login', component: LoginComponent, data: { animation: 'loginPage', title: 'Login' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
