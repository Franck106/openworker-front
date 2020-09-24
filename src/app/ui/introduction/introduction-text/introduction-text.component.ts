import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-introduction-text',
  templateUrl: './introduction-text.component.html',
  styleUrls: ['./introduction-text.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IntroductionTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
