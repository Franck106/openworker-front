import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveStarRatingComponent } from './components/five-star-rating/five-star-rating.component';
import { OneStarRatingComponent } from './components/one-star-rating/one-star-rating.component';
import { CategorySelectorComponent } from './components/category-selector/category-selector.component';



@NgModule({
  declarations: [FiveStarRatingComponent, OneStarRatingComponent, CategorySelectorComponent],
  exports: [
    FiveStarRatingComponent,
    OneStarRatingComponent,
    CategorySelectorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
