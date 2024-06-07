import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  options = {
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }),
      L.marker([34.84126130866288, 10.755354434191341], {
        icon: L.icon({
          iconUrl: 'assets/img/markker.png',
          iconSize: [32, 32]
        })
      }).bindPopup('Your Location')
    ],
    zoom: 15,
    center: L.latLng(34.84126130866288, 10.755354434191341

    )
  };
}
