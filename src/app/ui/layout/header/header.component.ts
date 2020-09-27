import {Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';
import {SimpleAuthenticationService} from '../../../features/authentication/services/simple-authentication.service';
import {Observable} from 'rxjs';
import {User} from '../../../features/catalogue/services/models/user';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';

// tslint:disable-next-line:no-any
function DBG(...args: any[]): void {
  // console.log(...args);
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {

  currentUser$: Observable<User | null>;

  constructor(private authService: SimpleAuthenticationService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
    this.currentUser$ = authService.currentUser$.pipe(
        tap((user) => DBG({user})));
  }

  ngOnInit(): void {
  }

  onLogOutClicked(): void {
    this.authService.logOut();
    this.router.navigateByUrl('/');
    this.cdr.detectChanges();
  }
}
