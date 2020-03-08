import { Component, OnInit } from '@angular/core';
import { GlobalServiceService } from '../../servicios/global-service.service';

@Component({
  selector: 'app-discos',
  templateUrl: './discos.component.html',
  styleUrls: ['./discos.component.css']
})
export class DiscosComponent implements OnInit {

  
  constructor(private servi : GlobalServiceService) { }

  img : any;

  ngOnInit(): void {
    this.servi.traerDiscos().subscribe(
      discos =>{
        this.img = discos;
        console.log(discos);
        console.log(discos[0].foto);
      }
    )
  }


}
