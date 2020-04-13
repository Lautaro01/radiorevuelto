import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalServiceService } from '../servicios/global-service.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-discoreview',
  templateUrl: './discoreview.component.html',
  styleUrls: ['./discoreview.component.css']
})
export class DiscoreviewComponent implements OnInit {


  disco : any;
  url : any;

  constructor(private ruta : ActivatedRoute, private servicio : GlobalServiceService, private sanitizer :  DomSanitizer) {
     this.servicio.traerUnDisco(this.ruta.snapshot.paramMap.get('id')).subscribe(
      datos =>{
        this.disco = datos;
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.disco[0].youtube.replace(".be/", "be.com/embed/"));
        console.log(this.disco);
      }
    )
   }

  ngOnInit(): void {
  //   this.servicio.traerUnDisco(this.ruta.snapshot.paramMap.get('id')).subscribe(
  //     datos =>{
  //       this.disco = datos;
  //       this.url = this.disco[0].youtube.replace(".be/", "be.com/embed/");
  //       console.log(this.disco);
  //     }
  //   )
  }

}
