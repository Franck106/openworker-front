import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProposalsPage } from './pages/proposals/proposals.page';
import { HomePage } from './pages/home/home.page';

const routes: Routes = [
  { path: 'proposals/:id', component: ProposalsPage },
  {path: 'home', component: HomePage}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogueRoutingModule { }
