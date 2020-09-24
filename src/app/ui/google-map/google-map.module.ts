import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [GoogleMapComponent],
  imports: [
    CommonModule,
    GoogleMapsModule,
    MatButtonModule
  ],
  exports: [GoogleMapComponent]
})
export class GoogleMapModule { }
