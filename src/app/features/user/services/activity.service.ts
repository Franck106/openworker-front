import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {UserActivity} from '../../catalogue/services/models/user-activity';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {SimpleAuthenticationService} from '../../authentication/services/simple-authentication.service'
import { find } from 'cypress/types/lodash';
import { User } from '../../catalogue/services/models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient, private authService: SimpleAuthenticationService) {
  }

  public getUserActivity(userId:  number | undefined): Observable<UserActivity> {
    userId = this.authService.getConnectedUser().id;
    console.log("https://earrj8sjp2.execute-api.eu-west-3.amazonaws.com/dev/" + (userId));
    return this.http.get<any>("https://earrj8sjp2.execute-api.eu-west-3.amazonaws.com/dev/" + (userId)).pipe(
     map(
      response => {
        const userProposals = JSON.parse(unescape(response.userProposals));
        const userPrestations = JSON.parse(unescape(response.userPrestations));
        const userDemands = JSON.parse(unescape(response.userDemands));
        console.log(userDemands, userPrestations, userProposals);
        return {userDemands, userPrestations, userProposals}
      }
    ));
  }

 /* public getUserActivity(userId: number): Observable<UserActivity> {
    const params = new HttpParams().set('userId', userId.toString());
    console.log(`${environment.orchestraUrl}/api/orchestrator/myactivity?userId=` + 2)
    return this.http.get<UserActivity>(`${environment.orchestraUrl}/api/orchestrator/myactivity`,
      { params });
  }*/
}
