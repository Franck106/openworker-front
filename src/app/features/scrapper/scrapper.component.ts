import { Component, Input, OnInit } from '@angular/core';
import { ScrapperUser } from 'src/app/core/elastic-search/scrapper-user';

@Component({
  selector: 'app-scrapper',
  templateUrl: './scrapper.component.html',
  styleUrls: ['./scrapper.component.css']
})
export class ScrapperComponent implements OnInit {

  @Input() users: ScrapperUser[];
  skills: string[];
  averagePrice: number;

  constructor() { }

  ngOnInit(): void {
    this.averagePrice = this.getAveragePrice(this.users);
  }
  
  getAveragePrice(users: ScrapperUser[]): number {
    const total = users.reduce((acc, current) => {
      return acc + current._source.price
    }, 0);
    return total / users.length;
  }
  
  


}
