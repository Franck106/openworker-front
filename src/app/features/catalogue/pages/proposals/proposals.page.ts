import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';
import { Proposal } from '../../services/models/proposal';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  templateUrl: './proposals.page.html',
  styleUrls: ['./proposals.page.css']
})
export class ProposalsPage implements OnInit {
  
  proposals$: Observable<Proposal[]>;
  categoryId: any;

  constructor(private catalogue: CatalogueService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.proposals$ = this.catalogue.getSubcategories(parseInt(this.route.snapshot.paramMap.get('id') || "1")).pipe(
      switchMap(categories => this.catalogue.getProposalsForCategories(categories || []))
    );
  }

}
