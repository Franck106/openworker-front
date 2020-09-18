import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccountPage} from './pages/account/account.page';
import {AuthGuard} from '../authentication/guards/auth.guard';
import {ActivityPage} from './pages/activity/activity.page';

const routes: Routes = [
  { path: 'activity', component: ActivityPage, canActivate: [AuthGuard] },
  { path: 'account', component: AccountPage, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
