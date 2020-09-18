import {Component, OnInit} from '@angular/core';
import {SimpleAuthenticationService} from '../../authentication/services/simple-authentication.service';
import {Observable} from 'rxjs';
import {User} from '../../catalogue/services/models/user';

@Component({
  templateUrl: './activity.page.html',
  styleUrls: ['./activity.page.css']
})
export class ActivityPage implements OnInit {

  currentUser$: Observable<User | null>;

  errorMessage?: string;

  constructor(private authService: SimpleAuthenticationService) {
    this.currentUser$ = authService.currentUser$;
  }

  ngOnInit(): void {

    // RestUtils.get(CONFIG.ORCH_URL + '/api/orchestrator/myactivity?userId=' + userId)
    //   .then(json => {
    //     if (json.userProposals != null && json.userProposals.length > 0) {
    //       displayProposalCards(json.userProposals,
    //         document.getElementById("flexCategories"),
    //         true);
    //
    //     }
    //     displayPrestations(json.userPrestations);
    //     displayDemands(json.userDemands);
    //   });
  }
}
