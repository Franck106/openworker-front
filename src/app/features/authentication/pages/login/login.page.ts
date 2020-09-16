import {Component, OnInit} from '@angular/core';
import {SimpleAuthenticationService} from '../../services/simple-authentication.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {
    login: string;
    password: string;
    errorMessage?: string;

    constructor(private authService: SimpleAuthenticationService,
                private router: Router) {
    }

    ngOnInit(): void {
    }

    onLogin(): void {
        this.errorMessage = undefined;

        this.authService.signIn(this.login, this.password)
            .subscribe(logged => {
                if (logged.error) {
                    this.errorMessage = logged.error;
                } else {
                    this.router.navigateByUrl('/');
                }
            });
    }
}
