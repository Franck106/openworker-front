import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'catalogue', loadChildren: () => import('./features/catalogue/catalogue.module').then(m => m.CatalogueModule) },
  { path: '', redirectTo: 'proposals', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
