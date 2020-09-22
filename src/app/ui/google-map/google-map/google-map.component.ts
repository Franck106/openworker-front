import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { MapMarker } from '@angular/google-maps';
import { Proposal } from 'src/app/features/catalogue/services/models/proposal';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoogleMapComponent implements OnInit {

  @Input() proposals: ReadonlyArray<Proposal> | null;
  @Input() zoom = 12;
  @Input() center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 8,
  }

  markers: MapMarker[];


  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })
    if(this.proposals) {
      for (let user of this.proposals) {
        //this.addMarker(user);
      }
    }
  }
  //TODO: complete addMarker to display active proposals on the map
  // addMarker(proposal: Proposal) {
  //   const location = JSON.parse(proposal.provider.geolocation!);
  //   this.markers.push({
  //     position: location,
  //     label: {
  //       color: 'red',
  //       text: proposal.name,
  //     },
  //     title: proposal.provider.lastName,
  //     options: { animation: google.maps.Animation.BOUNCE },
  //   })
  // }

  zoomIn() {
    if (this.zoom < this.options.maxZoom!) this.zoom++
  }

  zoomOut() {
    if (this.zoom > this.options.minZoom!) this.zoom--
  }

}
