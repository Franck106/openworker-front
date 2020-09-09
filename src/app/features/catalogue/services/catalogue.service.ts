import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Proposal } from './models/proposal';
import { APIData } from './models/api-data';
import { environment } from 'src/environments/environment';
import { map, pluck } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private http: HttpClient) { }

  getProposals(): Observable<Proposal[]> {
    return this.http
      .get<APIData<Proposal[]>>(`${environment.apiUrl}/api/proposals`)
      .pipe(
        pluck("data"),
        map((proposals) => proposals.map((proposal) => ({
          ...proposal,
        })))
      );
  }
}
