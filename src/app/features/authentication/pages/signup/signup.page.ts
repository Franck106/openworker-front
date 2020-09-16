import { Component, OnInit } from '@angular/core';
import {SimpleAuthenticationService} from '../../services/simple-authentication.service';
import {User} from '../../../catalogue/services/models/user';
import {Router} from '@angular/router';

@Component({
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.css']
})
export class SignupPage implements OnInit {

  requiredFields: (keyof SignupPage)[] = [
      'login', 'email', 'password'
  ];

  fieldErrors = new Map<string, string>();

  errorMessage?: string;

  login: string;
  email: string;
  password: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  address: string;
  postCode: string;
  city: string;

  constructor(private authService: SimpleAuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onSignup(): void {
    if (this.isFormValid()) {
      const user: User = {
        address: this.address,
        city: this.city,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
        password: this.password,
        phoneNumber: this.phoneNumber,
        postCode: this.postCode,
        login: this.login,
      };

      this.errorMessage = undefined;

      this.authService.register(user)
          .subscribe(logged => {
            if (logged.error) {
              this.errorMessage = logged.error;
            } else {
              this.router.navigateByUrl('/');
            }
          });
    }
  }

  onDemoButtonClick(): void {
    throw Error('Not implemented');
  }

  hasFieldError(fieldName: string): boolean {
    return this.fieldErrors.get(fieldName) != null;
  }

  private isFormValid(): boolean {
    let errorCount = 0;

    for (const field of this.requiredFields) {
      const isBlank = ! this[field]
          || (this[field] as string).trim().length === 0;

      if (isBlank) {
        this.fieldErrors.set(field, 'required');
        errorCount++;
      } else {
        this.fieldErrors.delete(field);
      }
    }

    return errorCount === 0;
  }
}
