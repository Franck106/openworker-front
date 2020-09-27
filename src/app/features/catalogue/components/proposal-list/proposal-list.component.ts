import {Component, OnInit, ChangeDetectionStrategy, Input, ViewChildren, QueryList} from '@angular/core';
import { Proposal } from '../../services/models/proposal';
import {ProposalItemComponent} from '../proposal-item/proposal-item.component';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProposalListComponent implements OnInit {

  @Input() proposals: ReadonlyArray<Proposal> | null;

  @Input() showContactButtons: boolean;

  @ViewChildren(ProposalItemComponent)
  proposalItems: QueryList<ProposalItemComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  focusOnProposal($event: Proposal): void {
    this.proposalItems.forEach(item => {
      if (item.proposal.id === $event.id) {
        item.focus();
      }
    });
  }
}
