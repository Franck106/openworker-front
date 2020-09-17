import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPage} from './pages/login/login.page';
import {SignupPage} from './pages/signup/signup.page';
import {AccountPage} from './pages/account/account.page';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: 'account', component: AccountPage, canActivate: [AuthGuard] },
  { path: 'login', component: LoginPage },
  { path: 'signup', component: SignupPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {

}
