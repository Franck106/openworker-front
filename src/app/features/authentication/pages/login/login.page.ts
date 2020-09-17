import {Component, OnInit} from '@angular/core';
import {SimpleAuthenticationService} from '../../services/simple-authentication.service';
import {Router} from '@angular/router';

@Component({
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.css']
})
export class LoginPage implements OnInit {
    requiredFields: (keyof LoginPage)[] = [
        'login', 'password'
    ];

    fieldErrors = new Map<string, string>();

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

        if (this.isFormValid()) {
            this.authService.signIn(this.login, this.password)
                .subscribe(logged => {
                    if (logged.error) {
                        this.errorMessage = logged.error;
                    } else {
                        this.router.navigateByUrl('/');
                    }
                });
        } else {
            this.errorMessage = 'Veuillez renseigner tous les champs.';
        }
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
