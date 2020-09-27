import {Component, OnInit, ChangeDetectionStrategy, Input, ChangeDetectorRef, ElementRef} from '@angular/core';
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

  focused: boolean;
  onTop: boolean;

  constructor(private router: Router,
              private cdr: ChangeDetectorRef,
              private element: ElementRef) {
  }

  ngOnInit(): void {
  }

  contactClicked(proposal: Proposal): void {
    this.router.navigateByUrl(`/catalogue/user/${proposal.provider.id}?proposal=${proposal.id}`);
  }

  focus(): void {
    this.focused = true;
    this.onTop = true;
    this.element.nativeElement.scrollIntoView({behavior: 'smooth'});
    this.cdr.detectChanges();

    setTimeout(() => {
      this.focused = false;
      this.cdr.detectChanges();

      setTimeout(() => this.onTop = false, 1000);
    }, 1000);
  }
}
