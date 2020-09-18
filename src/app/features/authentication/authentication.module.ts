import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginPage} from './pages/login/login.page';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {SignupPage} from './pages/signup/signup.page';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './guards/auth.guard';

@NgModule({
    declarations: [
        LoginPage,
        SignupPage,
    ],
    imports: [
        CommonModule,
        AuthenticationRoutingModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [AuthGuard],
})
export class AuthenticationModule {

}
