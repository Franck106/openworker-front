import {ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {User} from '../../services/models/user';
import {CatalogueService} from '../../services/catalogue.service';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {SimpleAuthenticationService} from '../../../authentication/services/simple-authentication.service';
import {take, withLatestFrom} from 'rxjs/operators';
import {ChatBoxModel} from '../../../../shared/chat-box-model';

declare var createChatBox: (rootElement: HTMLElement | null, sourceId: string, targetId: string) => ChatBoxModel;

@Component({
  templateUrl: './user-profile.page.html',
  styleUrls: ['./user-profile.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserProfilePage implements OnInit {

  userId: number;
  myUserId: number;
  shouldShowChatBox: boolean;
  prefilledMessage: string;
  messageUnderChat: string;
  proposalId: number;

  @ViewChild('chatBox')
  set chatBox(elem: ElementRef) {
    if (!! elem) {
      this.myUserId = this.auth.getConnectedUser().id || -1;
      const chatBoxModel = createChatBox(elem.nativeElement, this.myUserId.toString(), this.userId.toString());

      chatBoxModel.listeners.push({
        onmessagesent: () => this.catalogue.addPrestation(this.proposalId, this.myUserId)
          .subscribe(
          () => {
            this.messageUnderChat = 'Votre demande a bien été envoyée !';
            this.cdr.detectChanges();
          }
        ),
      });

      const textArea = document.querySelector('.scb-input-area textarea');

      if (textArea) {
        textArea.textContent = this.prefilledMessage;
      }
    }
  }

  provider: Observable<User | undefined>;

  constructor(private catalogue: CatalogueService,
              private route: ActivatedRoute,
              private auth: SimpleAuthenticationService,
              private cdr: ChangeDetectorRef) {

    this.userId = parseInt(this.route.snapshot.paramMap.get('id') || '1', 10);
    this.provider = this.catalogue.getUserById(this.userId);

    this.shouldShowChatBox = this.auth.getConnectedUser() != null &&
      this.auth.getConnectedUser().id !== this.userId;

    const proposalIdStr = route.snapshot.queryParamMap.get('proposal');

    if (proposalIdStr != null) {
      this.proposalId = parseInt(proposalIdStr, 10);

      this.provider.pipe(
        take(1),
        withLatestFrom(catalogue.getProposalById(this.proposalId))
      ).subscribe(([provider, proposal]) => {
        this.prefilledMessage = `Bonjour ${provider?.firstName}, je suis intéressé(e) par contre annonce "${proposal.name}" (#${proposal.id}).`;

        // if (this.chatBox != null) {
        //   const textArea = document.querySelector('.scb-input-area textarea');

        //   if (textArea) {
        //     textArea.textContent = this.prefilledMessage;
        //   }
        // }

        this.messageUnderChat = `En envoyant ce message, une demande sera enregistrée pour l'annonce #${proposal.id}.`;
      });
    }
  }

  ngOnInit(): void {
  }
}
