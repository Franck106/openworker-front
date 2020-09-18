import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { CatalogueService } from '../../services/catalogue.service';
import { Category } from '../../services/models/category';

@Component({
  templateUrl: './add-proposal.page.html',
  styleUrls: ['./add-proposal.page.css']
})
export class AddProposalPage implements OnInit {

  form = new FormControl(
    {
      description: '',
      prix: '',
      dictance: ''
    }
  );

  categories$: Observable<Category[]>;

  constructor(private catalogue: CatalogueService) { }

  ngOnInit(): void {
    this.categories$ = this.catalogue.getCategories();
  }

  addProposal(): void {
    console.log('addProposal'+ this.form.value);
    this.catalogue.addProposal(this.form.value);
  }

}
