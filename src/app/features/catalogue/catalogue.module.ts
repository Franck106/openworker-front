import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {MatPaginatorModule} from '@angular/material/paginator'; 
import {MatIconModule} from '@angular/material/icon'; 

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { ProposalsPage } from './pages/proposals/proposals.page';
import { ProposalListComponent } from './components/proposal-list/proposal-list.component';
import { ProposalItemComponent } from './components/proposal-item/proposal-item.component';
import { HomePage } from './pages/home/home.page';
import { CategoryListComponent } from './components/category-list/category-list.component';


@NgModule({
  declarations: [
    ProposalsPage,
    ProposalListComponent,
    ProposalItemComponent,
    HomePage,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    CatalogueRoutingModule,
    MatIconModule
  ],
  exports: [CategoryListComponent]
})
export class CatalogueModule { }
