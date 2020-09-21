import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proposal } from './models/proposal';
import { environment } from 'src/environments/environment';
import { Category } from './models/category';
import { map, pluck, tap } from 'rxjs/operators';
import { User } from './models/user';
import {Prestation} from './models/prestation';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  constructor(private http: HttpClient) {}

  getProposals(): Observable<Proposal[]> {
    return this.http.get<Proposal[]>(`${environment.apiUrl}/api/proposals`);
  }

  getProposalsForCategories(categories: Category[]): Observable<Proposal[]> {
    return this.http
      .post<ProposalSearchResponse>(
        `${environment.apiUrl}/api/proposals/search`,
        {
          categories: categories.map((category) => category.id),
        },
      )
      .pipe(
        tap((response) => console.log(response)),
        pluck('results'),
      );
  }

  getCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${environment.apiUrl}/api/categories`)
      .pipe(pluck('categories'));
  }

  getSubcategories(categoryId: number): Observable<Category[] | undefined> {
    return this.getCategories().pipe(
      map(
        (categories) =>
          categories.find((category) => category.id == categoryId)?.categories,
      ),
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/api/users`);
  }

  getUserById(userId: number): Observable<User | undefined> {
    return this.getUsers().pipe(
      map((users) => users.find((user) => user.id == userId)),
    );
  }

  addProposal(proposal: Proposal): Observable<Proposal> {
    console.log(proposal);
    return this.http
      .post<Proposal>(`${environment.apiUrl}/api/proposals`, proposal)
      .pipe(tap((response) => console.log('Service : ' + response)));
  }

  getPrestationById(id: number): Observable<Prestation> {
    return this.http.get<Prestation>(`${environment.apiUrl}/api/prestation/${id}`);
  }

  addFeedback(prestationId: number, rating: number, comment: string): Observable<void> {
    return this.http
      .put<void>(`${environment.apiUrl}/api/prestation/feedback`, {
        id: prestationId,
        customerRating: rating,
      });
  }
}

interface ProposalSearchResponse {
  numResults: number;
  results: Proposal[];
}
