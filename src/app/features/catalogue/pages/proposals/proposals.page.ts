import { Component, OnInit } from '@angular/core';
import { CatalogueService } from '../../services/catalogue.service';
import { Proposal } from '../../services/models/proposal';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './proposals.page.html',
  styleUrls: ['./proposals.page.css']
})
export class ProposalsPage implements OnInit {
  
  proposals$!: Observable<Proposal[]>;

  constructor(private catalogue: CatalogueService) { }

  ngOnInit(): void {
    this.proposals$ = this.catalogue.getProposals();
  }

}
