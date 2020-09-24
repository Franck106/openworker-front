import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroductionTextComponent } from './introduction-text/introduction-text.component';



@NgModule({
  declarations: [IntroductionTextComponent],
  imports: [
    CommonModule
  ],
  exports: [IntroductionTextComponent]
})
export class IntroductionModule { }
