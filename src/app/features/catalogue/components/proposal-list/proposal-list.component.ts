import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Proposal } from '../../services/models/proposal';

@Component({
  selector: 'app-proposal-list',
  templateUrl: './proposal-list.component.html',
  styleUrls: ['./proposal-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProposalListComponent implements OnInit {

  @Input() proposals: ReadonlyArray<Proposal> | null;

  constructor() { }

  ngOnInit(): void {
  }

}
