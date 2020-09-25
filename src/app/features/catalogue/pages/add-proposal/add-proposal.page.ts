import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SimpleAuthenticationService } from 'src/app/features/authentication/services/simple-authentication.service';
import { CatalogueService } from '../../services/catalogue.service';
import { Category } from '../../services/models/category';
import { Proposal } from '../../services/models/proposal';

@Component({
  templateUrl: './add-proposal.page.html',
  styleUrls: ['./add-proposal.page.css'],
})
export class AddProposalPage implements OnInit {
  form = this.formBuilder.group({
    category: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', Validators.required],
    maxDistance: ['', Validators.required],
  });

  categories$: Observable<Category[]>;

  constructor(
    private catalogue: CatalogueService,
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: SimpleAuthenticationService,
  ) {}

  ngOnInit(): void {
    this.categories$ = this.catalogue.getCategories();
  }

  onSubmit(): void {
    //console.warn(this.form.value);
    const proposal: Proposal = {
      name: this.form.value.name,
      description: this.form.value.description,
      price: this.form.value.price,
      category: this.form.value.category,
      provider: this.auth.getConnectedUser(),
      maxDistance: this.form.value.maxDistance,
      date: new Date(),
    };
    this.catalogue.addProposal(proposal).subscribe((response) => {
      if (response == null) {
        console.error('Server error');
      } else {
        console.log(response);
        this.router.navigateByUrl('/');
      }
    });
  }
}
