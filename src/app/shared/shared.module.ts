import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveStarRatingComponent } from './components/five-star-rating/five-star-rating.component';
import { OneStarRatingComponent } from './components/one-star-rating/one-star-rating.component';



@NgModule({
  declarations: [FiveStarRatingComponent, OneStarRatingComponent],
  exports: [
    FiveStarRatingComponent,
    OneStarRatingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
