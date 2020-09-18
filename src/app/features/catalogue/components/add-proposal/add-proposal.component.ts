import { Component, OnInit, ChangeDetectionStrategy, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CatalogueService } from '../../services/catalogue.service';
import { Category } from '../../services/models/category';

@Component({
  selector: 'app-add-proposal',
  templateUrl: './add-proposal.component.html',
  styleUrls: ['./add-proposal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProposalComponent implements OnInit {

  form = new FormGroup({});

  @Input() categories: ReadonlyArray<Category> | null;
  //selectedCategory: Category;

  constructor(private catalogue: CatalogueService) { }

  ngOnInit(): void {
  }

  onAddProposal() {
    console.log(this.form.value);
    this.catalogue.addProposal(this.form.value);
  }

}
