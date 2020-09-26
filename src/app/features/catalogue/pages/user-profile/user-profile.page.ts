import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../../services/models/user';
import {CatalogueService} from '../../services/catalogue.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {SimpleAuthenticationService} from '../../../authentication/services/simple-authentication.service';

declare var createChatBox: (rootElement: HTMLElement | null, sourceId: string, targetId: string) => void;

@Component({
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfilePage implements OnInit {

  userId: number;
  myUserId: number;

  shouldShowChatBox: boolean;

  @ViewChild('chatBox')
  set chatBox(elem: ElementRef) {
    if (!! elem) {
      this.myUserId = this.auth.getConnectedUser().id || -1;
      createChatBox(elem.nativeElement, this.myUserId.toString(), this.userId.toString());
    }
  }

  provider: Observable<User | undefined>;

  constructor(private catalogue: CatalogueService, private route: ActivatedRoute,
              private auth: SimpleAuthenticationService) {
  }

  ngOnInit(): void {
    this.userId = parseInt(this.route.snapshot.paramMap.get('id') || '1', 10);
    this.provider = this.catalogue.getUserById(this.userId);

    this.shouldShowChatBox = this.auth.getConnectedUser() != null &&
      this.auth.getConnectedUser().id !== this.userId;
  }
}
