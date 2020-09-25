import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, pluck, tap } from 'rxjs/operators';
import { Proposal } from 'src/app/features/catalogue/services/models/proposal';
import { environment } from 'src/environments/environment';
import { ElasticMapper } from './elastic-mapper';
import { ElasticResponse } from './elastic-response';

@Injectable({
  providedIn: 'root',
})
export class ElasticSearchService {
  constructor(private http: HttpClient, private elasticMapper: ElasticMapper) {}

  getElasticResults(text: string): Observable<Proposal[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log('service...');
    return this.http
      .get<ElasticResponse>(`${environment.elasticUrl}` + text, { headers })
      .pipe(
        tap((data) => console.log(data)),
        pluck('hits'),
        pluck('hits'),
        map((data) =>
          data.map(({ _source }) =>
            this.elasticMapper.convertElasticResponseToProposal(_source),
          ),
        ),
      );
  }
}
