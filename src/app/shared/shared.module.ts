import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiveStarRatingComponent } from './components/five-star-rating/five-star-rating.component';



@NgModule({
  declarations: [FiveStarRatingComponent],
  exports: [
    FiveStarRatingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
