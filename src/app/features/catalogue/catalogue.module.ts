import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { ProposalsPage } from './pages/proposals/proposals.page';
import { ProposalListComponent } from './components/proposal-list/proposal-list.component';
import { ProposalItemComponent } from './components/proposal-item/proposal-item.component';
import { HomePage } from './pages/home/home.page';


@NgModule({
  declarations: [
    ProposalsPage,
    ProposalListComponent,
    ProposalItemComponent,
    HomePage
  ],
  imports: [
    CommonModule,
    CatalogueRoutingModule
  ]
})
export class CatalogueModule { }
