import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {User} from '../../catalogue/services/models/user';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SimpleAuthenticationService {

  public readonly currentUser$: Observable<User | null>;

  constructor(private http: HttpClient) {
    this._currentUserSubject$ = new BehaviorSubject(this._currentUser);

    this.currentUser$ = this._currentUserSubject$.asObservable();

    this.checkUserInSession();
  }

  private _currentUserSubject$: Subject<User | null>;
  private _currentUser: User | null = null;

  register(user: User): Observable<UserOrError> {
    return this.http.post<User>(`${environment.apiUrl}/api/users`, user).pipe(
        catchError((err) => of(err.error))
    );
  }

  signIn(login: string, password: string): Observable<UserOrError> {
    const body = {login, password};
    const url = `${environment.apiUrl}/api/authenticate`;

    return this.http.post<UserOrError>(url, body).pipe(
        tap((response) => {
          if (response.error == null) {
            this._currentUser = response;
            this._currentUserSubject$.next(this._currentUser);
            console.log('logged as ' + this._currentUser.login);

            // TODO remove
            localStorage.setItem('userLoggedIn', JSON.stringify(this._currentUser));
          }
        }),
        catchError((err) => of(err.error))
    );
  }

  isLoggedIn(): Observable<boolean> {
    // Check session
    this.checkUserInSession();

    return this.currentUser$.pipe(
        map(user => user != null));
  }

  logOut(): void {
    this._currentUser = null;
    this._currentUserSubject$.next(this._currentUser);

    // TODO remove
    localStorage.setItem('userLoggedIn', JSON.stringify(null));
  }

  private checkUserInSession(): void {
    const session = localStorage.getItem('userLoggedIn');

    if (session && session !== '') {
      try {
        this._currentUser = JSON.parse(session);
        this._currentUserSubject$.next(this._currentUser);
      } catch (e) {
        console.error(e);
      }
    }
  }
}

interface UserOrError extends User {
  error?: string;
}
