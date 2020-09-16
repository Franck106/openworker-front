import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Proposal } from '../../services/models/proposal';

@Component({
  selector: 'app-proposal-item',
  templateUrl: './proposal-item.component.html',
  styleUrls: ['./proposal-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProposalItemComponent implements OnInit {

  @Input() proposal: Proposal;

  constructor() { }

  ngOnInit(): void {
  }

}
