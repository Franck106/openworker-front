import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-one-star-rating',
  templateUrl: './one-star-rating.component.html',
  styleUrls: ['./one-star-rating.component.css']
})
export class OneStarRatingComponent implements OnInit {

  @Input()
  ratings: number;

  @Input()
  fontSize = 18;

  constructor() { }

  ngOnInit(): void {
  }

}
