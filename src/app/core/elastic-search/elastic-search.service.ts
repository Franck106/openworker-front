import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { Proposal } from 'src/app/features/catalogue/services/models/proposal';
import { environment } from 'src/environments/environment';
import { ElasticProposal } from './elastic-proposal';

@Injectable({
  providedIn: 'root'
})
export class ElasticSearchService {

  

  constructor(private http: HttpClient) { }

  getElasticResults(text: string): Observable<ElasticProposal[]> {
    const headers =  new HttpHeaders().set("Content-Type", "application/json");
    console.log('service...');
    return this.http.get<ElasticProposal[]>(`${environment.elasticUrl}`+ text, {headers}).pipe(
      pluck('hits'),
      pluck('hits'),
    )
  }

}
