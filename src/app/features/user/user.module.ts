import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountPage} from './pages/account/account.page';
import {ActivityPage} from './pages/activity/activity.page';
import {UserRoutingModule} from './user-routing.module';
import {CatalogueModule} from '../catalogue/catalogue.module';
import {SharedModule} from '../../shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';

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
    MatToolbarModule,
  ]
})
export class UserModule { }
