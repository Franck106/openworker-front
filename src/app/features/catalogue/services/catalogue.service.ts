import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proposal } from './models/proposal';
import { environment } from 'src/environments/environment';
import { Category } from './models/category';
import { map, pluck, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) { }

  getProposals(): Observable<Proposal[]> {
    return this.http
      .get<Proposal[]>(`${environment.apiUrl}/api/proposals`)
  }

  getProposalsForCategories(categories: Category[]): Observable<Proposal[]> {
    return this.http.post<ProposalSearchResponse>(`${environment.apiUrl}/api/proposals/search`, {
      categories: categories.map(category => category.id)
    }).pipe(
      tap(response => console.log(response)),
      pluck('results')
    )
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${environment.apiUrl}/api/categories`).pipe(
      pluck('categories')
    )
  }

  getSubcategories(categoryId: number): Observable<Category[] | undefined> {
    return this.getCategories().pipe(
      map((categories) => categories.find((category) => category.id == categoryId)?.categories)
    )
  }

}

interface ProposalSearchResponse {
  numResults: number,
  results: Proposal[]
}