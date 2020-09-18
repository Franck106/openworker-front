import {Component, OnInit} from '@angular/core';
import {SimpleAuthenticationService} from '../../../authentication/services/simple-authentication.service';
import {Observable} from 'rxjs';
import {User} from '../../../catalogue/services/models/user';
import {ActivityService} from '../../services/activity.service';
import {filter, switchMap} from 'rxjs/operators';
import {UserActivity} from '../../../catalogue/services/models/user-activity';
import {Prestation} from '../../../catalogue/services/models/prestation';
import {DatePipe} from '@angular/common';

@Component({
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.css'],
  providers: [DatePipe]
})
export class ActivityPage implements OnInit {

  activity$: Observable<UserActivity | undefined>;

  constructor(private authService: SimpleAuthenticationService,
              private activityService: ActivityService,
              private datePipe: DatePipe) {
    this.activity$ = authService.currentUser$.pipe(
      // @ts-ignore
      filter(user => !!user),
      // @ts-ignore
      switchMap((user: User) => this.activityService.getUserActivity(user.id)),
    );
  }

  ngOnInit(): void {
  }

  getStatus(prestation: Prestation): string {
    return prestation.delivered ? 'Terminé' :
      (prestation.cancelled ? 'Annulée' :
        (prestation.valide ? 'En cours' : 'En attente'));
  }

  formatDate(date: Date): string | null {
    if (date != null) {
      return this.datePipe.transform(date, 'dd/MM/yyyy');
    }

    return '-';
  }
}
