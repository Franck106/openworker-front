import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountPage} from './pages/account/account.page';
import {ActivityPage} from './pages/activity/activity.page';
import {UserRoutingModule} from './user-routing.module';
import {CatalogueModule} from '../catalogue/catalogue.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  declarations: [
    AccountPage,
    ActivityPage
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    CatalogueModule,
    SharedModule,
  ]
})
export class UserModule { }
