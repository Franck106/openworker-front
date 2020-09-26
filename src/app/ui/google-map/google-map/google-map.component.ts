import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { Proposal } from 'src/app/features/catalogue/services/models/proposal';
import { User } from 'src/app/features/catalogue/services/models/user';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapComponent implements OnInit {
  @Input() proposals: ReadonlyArray<Proposal> | null;
  @Input() connectedUser: User;
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    maxZoom: 15,
    minZoom: 8,
  };

  markers: any[] = [];

  constructor() {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position);
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
    });
    if (this.proposals) {
      for (let proposal of this.proposals) {
        this.addMarker(proposal);
      }
    }
  }

  addMarker(proposal: Proposal) {
    const location = JSON.parse(proposal.provider.geolocation!);
    console.log(proposal);
    this.markers.push({
      position: location,
      label: {
        color: 'red',
        text: proposal.name,
      },
      title: proposal.provider.lastName,
      options: { animation: google.maps.Animation.BOUNCE },
    });
  }
}
