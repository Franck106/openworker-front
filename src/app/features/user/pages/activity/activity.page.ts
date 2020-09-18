import {Component, OnInit} from '@angular/core';
import {SimpleAuthenticationService} from '../../../authentication/services/simple-authentication.service';
import {Observable} from 'rxjs';
import {User} from '../../../catalogue/services/models/user';
import {ActivityService} from '../../services/activity.service';
import {filter, switchMap} from 'rxjs/operators';
import {UserActivity} from '../../../catalogue/services/models/user-activity';
import {Prestation} from '../../../catalogue/services/models/prestation';

@Component({
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.css']
})
export class ActivityPage implements OnInit {

  activity$: Observable<UserActivity | undefined>;

  constructor(private authService: SimpleAuthenticationService,
              private activityService: ActivityService) {
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
}
