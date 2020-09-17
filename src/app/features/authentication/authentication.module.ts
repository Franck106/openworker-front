import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginPage} from './pages/login/login.page';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {SignupPage} from './pages/signup/signup.page';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
      LoginPage,
      SignupPage,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
  ]
})
export class AuthenticationModule {

}
