import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../../catalogue/services/models/user';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SimpleAuthenticationService {

  constructor(private http: HttpClient) { }

  currentUser: User | null;

  register(user: User): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/api/users`, user);
  }

  signIn(login: string, password: string): Observable<UserOrError> {
    const body = {login, password};
    const url = `${environment.apiUrl}/api/authenticate`;

    return this.http.post<UserOrError>(url, body).pipe(
        tap((response) => {
          if (response.error != null) {
            this.currentUser = response;
          }
        }),
        catchError((err) => of(err.error))
    );
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.currentUser != null);
  }

  getAuthenticatedUser(): Observable<User | null> {
    return of(this.currentUser);
  }

  logOut(): void {
    this.currentUser = null;
  }
}

interface UserOrError extends User {
  error?: string;
}
