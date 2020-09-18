import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserActivity} from '../../catalogue/services/models/user-activity';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) {
  }

  public getUserActivity(userId: number): Observable<UserActivity> {
    const params = new HttpParams().set('userId', userId.toString());
    return this.http.get<UserActivity>(`${environment.orchestraUrl}/api/orchestrator/myactivity`,
      { params });
  }
}
