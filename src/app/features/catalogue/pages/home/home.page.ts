import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ElasticSearchService } from 'src/app/core/elastic-search/elastic-search.service';
import { CatalogueService } from '../../services/catalogue.service';
import { Category } from '../../services/models/category';
import { Proposal } from '../../services/models/proposal';

@Component({
  // selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.css'],
})
export class HomePage implements OnInit {
  title: string = 'BIENVENUE';
  categories$: Observable<Category[]>;
  proposals$: Observable<Proposal[]>;

  form = this.formBuilder.group({
    searchQuery: [''],
  });

  proposals: Proposal[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private catalogue: CatalogueService,
    private elasticSearch: ElasticSearchService,
  ) {}

  ngOnInit(): void {
    this.categories$ = this.catalogue
      .getCategories()
      .pipe(tap((categories) => console.log(categories)));

    this.proposals$ = this.catalogue.getProposals();
  }

  onSubmit() {
    console.log('submit...');
    this.proposals = [];
    console.log(this.form.value.searchQuery);
    return this.elasticSearch
      .getElasticResults(this.form.value.searchQuery)
      .subscribe((data) => {
        data.forEach((elt) => this.proposals.push(elt));
        console.log(this.proposals);
      });
  }
}
