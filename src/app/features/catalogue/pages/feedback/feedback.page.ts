import { Component, OnInit } from '@angular/core';
import {CatalogueService} from '../../services/catalogue.service';
import {ActivatedRoute} from '@angular/router';
import {Prestation} from '../../services/models/prestation';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.css']
})
export class FeedbackPage implements OnInit {

  array5 = [0, 1, 2, 3, 4];

  prestation$: Observable<Prestation>;

  starSize = 40;

  rating = 3;

  submitted: boolean;

  constructor(private catalogueService: CatalogueService,
              private activatedRoute: ActivatedRoute) {
    this.prestation$ = this.catalogueService.getPrestationById(this.prestationId);
  }

  get prestationId(): number {
    const prestationId = this.activatedRoute.snapshot.paramMap.get('id');
    return parseInt(prestationId || '0', 10);
  }

  ngOnInit(): void {
  }

  setRating(idx: number): void {
    this.rating = idx;
  }

  onSubmit(): void {
    this.catalogueService.addFeedback(this.prestationId, this.rating, '')
      .subscribe(() => this.submitted = true);
  }
}
