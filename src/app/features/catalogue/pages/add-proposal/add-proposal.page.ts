import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SimpleAuthenticationService } from 'src/app/features/authentication/services/simple-authentication.service';
import { CatalogueService } from '../../services/catalogue.service';
import { Category } from '../../services/models/category';
import { Proposal } from '../../services/models/proposal';

// tslint:disable-next-line:no-any
function DBG(...args: any[]): void { console.log(...args); }

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
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.categories$ = this.catalogue.getCategories();
  }

  onSubmit(): void {
    const loading = this.snackbar.open('Enregistrement en cours...');
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
      loading.dismiss();
      if (response == null) {
        console.error('Server error');
      } else {
        DBG(response);
        this.snackbar.open('Service ajouté !', 'Ok', { duration: 3000 });
        this.router.navigateByUrl('/user/activity');
      }
    });
  }
}
