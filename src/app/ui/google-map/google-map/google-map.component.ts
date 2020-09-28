import {
  Component,
  OnInit,
  Input, ViewChild, EventEmitter, Output,
} from '@angular/core';
import {Proposal} from 'src/app/features/catalogue/services/models/proposal';
import {User} from 'src/app/features/catalogue/services/models/user';
import {GoogleMap} from '@angular/google-maps';

// tslint:disable-next-line:no-any
function DBG(...args: any[]): void {
  console.log(...args);
}

interface Marker {
  title: string;
  position: google.maps.LatLngLiteral;
  label: { color: string, text: string };
  clickable?: boolean;
  // tslint:disable-next-line:no-any
  options?: any;
}

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoogleMapComponent implements OnInit {
  private proposalMarkerMap: Map<Marker, Proposal>;

  @Input()
  set proposals(proposals: ReadonlyArray<Proposal> | null) {
    try {
      if (proposals && this.map) {
        this.markers = [];
        this.bounds = new google.maps.LatLngBounds();
        this.proposalMarkerMap = new Map<Marker, Proposal>();

        for (const proposal of proposals) {
          this.addMarker(proposal);
        }

        this.map.fitBounds(this.bounds);
      }
    } catch (e) {
      setTimeout(() => this.proposals = proposals, 500);
    }
  }

  @Input() connectedUser: User;

  @Output() proposalClicked = new EventEmitter<Proposal>();

  @ViewChild(GoogleMap, {static: true})
  map: GoogleMap;

  zoom = 12;

  center: google.maps.LatLngLiteral;

  bounds = new google.maps.LatLngBounds();

  options: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    zoomControl: true,
    scrollwheel: false,
    disableDoubleClickZoom: false,
    maxZoom: 13
  };

  markers: Marker[] = [];

  constructor() {
    DBG('Create map component');
  }

  ngOnInit(): void {
    this.center = {
      lat: 48.860528,
      lng: 2.340351,
    };
  }

  addMarker(proposal: Proposal): void {
    if (proposal.provider.geolocation) {
      const location = JSON.parse(proposal.provider.geolocation);

      const marker = {
        position: location,
        label: {
          color: 'red',
          text: proposal.name,
        },
        title: proposal.provider.lastName,
      };

      this.markers.push(marker);
      this.proposalMarkerMap.set(marker, proposal);
      this.bounds.extend(location);
    }
  }

  markerClicked($event: google.maps.MouseEvent, marker: Marker): void {
    const proposal = this.proposalMarkerMap.get(marker);
    this.proposalClicked.emit(proposal);
    DBG('Proposal clicked : ', proposal);
  }
}
