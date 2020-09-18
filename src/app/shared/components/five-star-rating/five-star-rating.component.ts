import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-five-star-rating',
  templateUrl: './five-star-rating.component.html',
  styleUrls: ['./five-star-rating.component.css']
})
export class FiveStarRatingComponent implements OnInit {

  @Input()
  ratings: number;

  get text(): string { return this.ratings + '/5'; }

  get ratingArray(): number[] {
    return new Array(this.ratings).fill(0);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
