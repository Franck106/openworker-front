import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CatalogueService } from '../../services/catalogue.service';
import { Category } from '../../services/models/category';
import { Proposal } from '../../services/models/proposal';

@Component({
 // selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  constructor(private catalogue: CatalogueService) { }

  title : string = "BIENVENUE";
  categories$: Observable<Category[]>;
  proposals$: Observable<Proposal[]>;
  

  ngOnInit(): void {
    this.categories$ = this.catalogue.getCategories().pipe(
      tap(categories => console.log(categories))
    );

    this.proposals$ = this.catalogue.getProposals();
    
  }

  
}
