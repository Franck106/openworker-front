import { Component, Input, OnInit } from '@angular/core';
import { ScrapperUser } from 'src/app/core/elastic-search/scrapper-user';
import { compose, map, orderBy, reduce, slice, uniq } from 'lodash/fp'; 

@Component({
  selector: 'app-scrapper',
  templateUrl: './scrapper.component.html',
  styleUrls: ['./scrapper.component.css']
})
export class ScrapperComponent implements OnInit {

  @Input() users: ScrapperUser[] = [];
  skills: string[];
  averagePrice: number;

  constructor() { }

  ngOnInit(): void {
    this.averagePrice = this.getAveragePrice(this.users);
    this.skills = this.getTopSkills(this.users);
    console.log(this.skills);
  }
  
  getAveragePrice(users: ScrapperUser[]): number {
    const total = users.reduce((acc, current) => {
      return acc + current._source.price
    }, 0);
    return total / users.length;
  }

  //List of all the skills in the user list
  allSkills = this.users.map((user) => user._source.skills.map((skill) => skill));



  getTopSkills(users: ScrapperUser[]): [string, string, string] {
    return compose(
      slice(0, 3),
      uniq,
      map<{ skill: string; count: number }, string>(({ skill }) => skill),
      orderBy<{ skill: string; count: number }>(["count"], ["desc"]),
      (arr: string[]) => reduce<string, { skill: string; count: number }[]>((acc, item) => {
        return [
          ...acc,
          {
            skill: item,
            count: arr.filter((_) => _ === item).length,
          },
        ];
      }, [])(arr),
      reduce<ScrapperUser, string[]>((acc,item) => [...acc, ...item._source.skills], [])
    )(users);
  }
    
  
  


}
