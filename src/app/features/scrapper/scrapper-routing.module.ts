import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScrapperComponent } from './scrapper.component';

const routes: Routes = [{ path: '', component: ScrapperComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScrapperRoutingModule { }
