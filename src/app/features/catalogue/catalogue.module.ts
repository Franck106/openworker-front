import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

import { CatalogueRoutingModule } from './catalogue-routing.module';
import { ProposalsPage } from './pages/proposals/proposals.page';
import { ProposalListComponent } from './components/proposal-list/proposal-list.component';
import { ProposalItemComponent } from './components/proposal-item/proposal-item.component';
import { HomePage } from './pages/home/home.page';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { UserProfilePage } from './pages/user-profile/user-profile.page';
import { AddProposalPage } from './pages/add-proposal/add-proposal.page';
import { FeedbackPage } from './pages/feedback/feedback.page';
import { GoogleMapModule } from '../../ui/google-map/google-map.module';


@NgModule({
  declarations: [
    ProposalsPage,
    ProposalListComponent,
    ProposalItemComponent,
    HomePage,
    CategoryListComponent,
    UserProfilePage,
    AddProposalPage,
    FeedbackPage
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    CatalogueRoutingModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    GoogleMapModule
  ],
  exports: [CategoryListComponent, ProposalListComponent]
})
export class CatalogueModule { }
