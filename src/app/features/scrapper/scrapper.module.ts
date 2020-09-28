import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';

import { ScrapperRoutingModule } from './scrapper-routing.module';
import { ScrapperComponent } from './scrapper.component';

@NgModule({
  declarations: [ScrapperComponent],
  imports: [
    CommonModule,
    ScrapperRoutingModule,
    MatBadgeModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
  ],
  exports: [ScrapperComponent],
})
export class ScrapperModule {}
