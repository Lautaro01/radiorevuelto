import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Subscriber } from 'rxjs';
import { GlobalServiceService } from '../../servicios/global-service.service';

export interface Cordenada{
  cordenada : Array<number>,
  html : string
}

@Component({
  selector: 'app-radios',
  templateUrl: './radios.component.html',
  styleUrls: ['./radios.component.css']
})
export class RadiosComponent implements OnInit {


  algo : Cordenada[];



  options : any = 
    {
      layers: [
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),

      // L.marker([-33.2721976, -63.3445245]).bindPopup(`<a href="http://2.bp.blogspot.com/-upwnXlYrCyM/T9JxvD0qnxI/AAAAAAAACUI/-hJGvJJuOZY/s1600/La+tribu.jpg" imageanchor="1" style="clear: left; float: left; margin-bottom: 1em; margin-right: 1em;"><img border="0" height="110" src="http://2.bp.blogspot.com/-upwnXlYrCyM/T9JxvD0qnxI/AAAAAAAACUI/-hJGvJJuOZY/s200/La+tribu.jpg" width="200"></a></div>
      // <span style="font-family: Arial, Helvetica, sans-serif;"><b>La Tribu</b></span><br>
      // <span style="font-family: Arial, Helvetica, sans-serif;"><b>Ciudad de Buenos Aires</b></span><br>
      // <span style="font-family: Arial, Helvetica, sans-serif;">Miércoles 22hs</span><br>
      // <span style="font-family: Arial, Helvetica, sans-serif;"><b>FM 88.7</b></span><br>
      // <a href="http://www.fmlatribu.com/"><span style="font-family: Arial, Helvetica, sans-serif;">www.latribu.com&nbsp;</span></a><br>
      // <span style="font-family: Arial, Helvetica, sans-serif; font-size: x-small;">Nuestra casa, el 11 de Noviembre de 2001 comenzamos el revuelto.</span><br>`),
      ],
      zoom: 6,
      center: L.latLng(-31.2721976, -61.3445245),
    }
    


  constructor( private servis : GlobalServiceService ) { }

  ngOnInit() {

    this.servis.traerRadiosMapa().subscribe(
      async datos =>{
        this.algo = await datos as Cordenada[];

        for (let i = 0; i < this.algo["array"].length; i++) {
          let coor : any = [parseFloat(this.algo["array"][i].cordenada[0]),parseFloat(this.algo["array"][i].cordenada[1])]
          this.options.layers.push(L.marker(coor));
        }

      })

      
    }

    ngDoCheck(){

      for (let i = 0; i < this.algo["array"].length; i++) {
        let coor : any = [parseFloat(this.algo["array"][i].cordenada[0]),parseFloat(this.algo["array"][i].cordenada[1])]
        this.options.layers.push(L.marker(coor).bindPopup(this.algo["array"][i].html));
      }
    }





}
