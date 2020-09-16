import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CatalogueService } from '../../services/catalogue.service';
import { Category } from '../../services/models/category';

@Component({
 // selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css']
})
export class HomePage implements OnInit {

  constructor(private catalogue: CatalogueService) { }

  title : string = "BIENVENUE";
  categories$: Observable<Category[]>;
  

  ngOnInit(): void {
    this.categories$ = this.catalogue.getCategories().pipe(
      tap(categories => console.log(categories))
    );
    
  }

  
}
