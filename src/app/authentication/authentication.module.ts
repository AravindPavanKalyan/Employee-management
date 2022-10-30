import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BnNgIdleService } from 'bn-ng-idle';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [BnNgIdleService]
})
export class AuthenticationModule {}
