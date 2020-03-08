import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';



@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css']
})
export class RadiosComponent implements OnInit {



  iniciar()
  {

  
  }

  options = {
    layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
      
      
      L.marker([-31.2721976, -61.3445245]).bindPopup("hola")

    ],
    zoom: 6,
    center: L.latLng(-31.2721976, -61.3445245),
  };
  

  constructor() { }

  ngOnInit(): void {
  }

  

}
