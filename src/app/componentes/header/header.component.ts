import { Component, OnInit } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {



  mostrar : boolean;
  
  constructor() { }

  ngOnInit(): void {
    console.log("Hola jaja");
  }

  show()
  {
    this.mostrar = !this.mostrar
  }

}
