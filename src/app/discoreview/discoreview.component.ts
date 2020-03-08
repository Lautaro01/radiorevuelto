import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalServiceService } from '../servicios/global-service.service';

@Component({
  selector: 'app-discoreview',
  templateUrl: './discoreview.component.html',
  styleUrls: ['./discoreview.component.css']
})
export class DiscoreviewComponent implements OnInit {


  disco : any;

  constructor(private ruta : ActivatedRoute, private servicio : GlobalServiceService) {
     this.servicio.traerUnDisco(this.ruta.snapshot.paramMap.get('id')).subscribe(
      datos =>{
        this.disco = datos;
        console.log(this.disco);
      }
    )
   }

  ngOnInit(): void {
    // this.servicio.traerUnDisco(this.ruta.snapshot.paramMap.get('id')).subscribe(
    //   datos =>{
    //     console.log(datos);
    //   }
    // )
  }

}
