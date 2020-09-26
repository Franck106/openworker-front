import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Proposal} from '../../services/models/proposal';
import {Router} from '@angular/router';

@Component({
  selector: 'app-proposal-item',
  templateUrl: './proposal-item.component.html',
  styleUrls: ['./proposal-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProposalItemComponent implements OnInit {

  @Input() proposal: Proposal;

  @Input() showContactButton: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  contactClicked(proposal: Proposal): void {
    this.router.navigateByUrl(`/catalogue/user/${proposal.provider.id}?proposal=${proposal.id}`);
  }
}
