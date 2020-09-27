import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {CatalogueService} from '../../services/catalogue.service';
import {Proposal} from '../../services/models/proposal';
import {Observable, of} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {Category} from '../../services/models/category';
import {User} from '../../services/models/user';
import {tap} from 'rxjs/operators';

// tslint:disable-next-line:no-any
function DBG(...args: any[]): void {
  console.log(...args);
}

@Component({
  templateUrl: './proposals.page.html',
  styleUrls: ['./proposals.page.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ProposalsPage implements OnInit {

  proposals$: Observable<Proposal[]>;

  connectedUser: User;

  numResults = 0;

  private currentCategories: Category[] = [];

  private currentSearchLocation: string | null;

  private geocoder = new google.maps.Geocoder();

  constructor(private catalogue: CatalogueService,
              private route: ActivatedRoute,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.catalogue.getSubcategories(parseInt(this.route.snapshot.paramMap.get('id') || '1', 10)).subscribe(
      (categories: Category[]) => {
        this.currentCategories = categories;
        this.queryProposals();
      }
    );
  }

  handleCategoryChange(categories: Category[]): void {
    DBG('handle category change..');
    this.currentCategories = categories;
    this.queryProposals();
  }

  handleLocationChange($event: Event): void {
    DBG('handle location change..');
    const locationValue = ($event.target as HTMLInputElement)?.value;

    if (locationValue == null || locationValue === '') {
      this.currentSearchLocation = null;

      this.queryProposals();
    } else {
      this.geocoder.geocode({address: locationValue}, (results) => {
        if (results.length === 0) {
          this.currentSearchLocation = null;

          this.queryProposals();
        } else {
          const location = results[0].geometry.location;
          this.currentSearchLocation = JSON.stringify(location);

          DBG('new search location:', this.currentSearchLocation);

          this.queryProposals();
        }
      });
    }
  }

  private queryProposals(): void {
    this.catalogue.searchProposals({
      categories: this.currentCategories.map(c => c.id),
      searchLocation: this.currentSearchLocation,
    }).pipe(
      tap((results) => {
        DBG('Getting new search results');
        this.numResults = results.length;
        this.proposals$ = of(results);
        this.cdr.detectChanges();
      })
    ).subscribe();
  }
}
