import {Component, OnInit} from '@angular/core';
import {SimpleAuthenticationService} from '../../../authentication/services/simple-authentication.service';
import {Observable} from 'rxjs';
import {User} from '../../../catalogue/services/models/user';
import {filter, take} from 'rxjs/operators';

@Component({
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.css']
})
export class AccountPage implements OnInit {

    currentUser$: Observable<User | null>;

    errorMessage?: string;

    private firstName?: string;
    private lastName?: string;
    private address?: string;
    private postCode?: string;
    private city?: string;
    private phoneNumber?: string;
    private email?: string;

    constructor(private authService: SimpleAuthenticationService) {
        this.currentUser$ = authService.currentUser$;

        this.currentUser$.pipe(
          filter((user) => user != null),
          take(1),
        ).subscribe((user) => {
            this.firstName = user?.firstName;
            this.lastName = user?.lastName;
            this.address = user?.address;
            this.postCode = user?.postCode;
            this.city = user?.city;
            this.phoneNumber = user?.phoneNumber;
            this.email = user?.email;
        });
    }

    ngOnInit(): void {
    }

    onSubmit(): void {
        throw Error('Not implemented');
    }
}
