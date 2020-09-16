import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserSession,
  CognitoUserAttribute, ISignUpResult, ICognitoUserData
} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: '',
  ClientId: '',
};

const userPool: CognitoUserPool = new CognitoUserPool(poolData);

@Injectable({
  providedIn: 'root'
})
export class CognitoAuthenticationService {

  constructor() { }

  cognitoUser: CognitoUser | null;

  register(email: string, password: string): Observable<CognitoUser> {
    const attributeList: CognitoUserAttribute[] = [];
    const validationData: CognitoUserAttribute[] = [];

    return new Observable<CognitoUser>(observer => {
      userPool.signUp(email, password, attributeList, validationData, (err?: Error, result?: ISignUpResult) => {
        if (err) {
          console.error(err);
          observer.error(err);
        }

        if (!! result) {
          this.cognitoUser = result.user;
          console.log('signUp success', result);
          observer.next(result.user);
          observer.complete();
        }
      });
    });
  }

  signIn(email: string, password: string): Observable<CognitoUserSession> {
    const authenticationData = {
      Username: email,
      Password: password,
    };

    const authenticationDetails = new AuthenticationDetails(authenticationData);

    const userData = {
      Username: email,
      Pool: userPool,
    };

    const cognitoUser = new CognitoUser(userData);

    return new Observable<CognitoUserSession>(observer => {
      cognitoUser.authenticateUser(authenticationDetails, {
        onSuccess(result): void {
          observer.next(result);
          observer.complete();
        },
        onFailure(err: Error): void{
          observer.error(err);
        }
      });
    });
  }

  isLoggedIn(): boolean {
    return userPool.getCurrentUser() != null;
  }

  confirmAuthCode(code: string): Observable<boolean> {
    const user: ICognitoUserData = {
      Username: this.cognitoUser?.getUsername() || '',
      Pool: userPool,
    };

    return new Observable<boolean>(observer => {
      const cognitoUser = new CognitoUser(user);

      cognitoUser.confirmRegistration(code, true, (err, result) => {
        if (err) {
          console.error(err);
          observer.error(err);
        }

        console.log('confirmAuthCode success', result);
        observer.next(result.user);
        observer.complete();
      });
    });
  }

  getAuthenticatedUser(): CognitoUser | null {
    return userPool.getCurrentUser();
  }

  logOut(): void {
    const authenticatedUser = this.getAuthenticatedUser();

    if (authenticatedUser != null) {
      authenticatedUser.signOut();
      this.cognitoUser = null;
    }
  }

  isAuthenticated(): Observable<boolean> {
    const user = this.getAuthenticatedUser();

    return new Observable<boolean>((observer) => {
      if (!user) {
        observer.next(false);
      } else {
        user.getSession((err: Error, session: CognitoUserSession) => {
          if (err) {
            observer.next(false);
          } else {
            if (session.isValid()) {
              observer.next(true);
            } else {
              observer.next(false);
            }
          }
        });
      }
      observer.complete();
    });
  }
}
