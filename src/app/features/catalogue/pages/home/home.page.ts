import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ElasticSearchService } from 'src/app/core/elastic-search/elastic-search.service';
import { ProposalDto } from 'src/app/core/elastic-search/proposal-dto';
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

  proposals: ProposalDto[] = [];

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
    console.log(this.form.value.searchQuery);
    return this.elasticSearch
      .getElasticResults(this.form.value.searchQuery)
      .subscribe((data) => {
        data.forEach((elt) => {
          const item: ProposalDto = {
            name: elt._source.name,
            description: elt._source.description,
            price: elt._source.price,
            category: elt._source.category_id,
            provider: elt._source.provider_id,
            maxDistance: elt._source.max_distance,
            date: elt._source.date,
          };
          this.proposals.push(item);
        });
        console.log(this.proposals);
      });
  }
}
