import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProposalsPage } from './pages/proposals/proposals.page';
import { HomePage } from './pages/home/home.page';
import { UserProfilePage } from './pages/user-profile/user-profile.page';

const routes: Routes = [
  { path: 'proposals/:id', component: ProposalsPage }, 
  { path: 'home', component: HomePage },
  { path: 'user', component: UserProfilePage }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
