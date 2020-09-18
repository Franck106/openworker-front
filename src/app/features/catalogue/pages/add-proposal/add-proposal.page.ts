import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatalogueService } from '../../services/catalogue.service';
import { Category } from '../../services/models/category';

@Component({
  templateUrl: './add-proposal.page.html',
  styleUrls: ['./add-proposal.page.css']
})
export class AddProposalPage implements OnInit {

  categories$: Observable<Category[]>;

  constructor(private catalogue: CatalogueService) { }

  ngOnInit(): void {
    this.categories$ = this.catalogue.getCategories();
  }

}
