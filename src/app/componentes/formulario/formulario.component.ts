import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  evento = {
    nombre : null,
    ubicacion :null,
    fecha : null,
    hora : null,
    costo:null,
    foto : null,
    facebook : null,
    youtube : null,
    
  }

  inputs = ["nombre","ubicacion","fecha","hora","costo","foto","facebook","youtube"];
  error = [false,false,false,false,false,false,false,false];
  errorMensajeBool = false;
  costoEvento=1;
  errorMensaje;

  constructor() { }

  ngOnInit(): void {
  }

  archivo()
  {
    this.inputs.forEach(name => {
      if(this.evento[name] != null && this.evento[name] != "")
      {
        console.log(this.evento[name]);
        this.error[this.inputs.indexOf(name)] = false;
      }
      else
      {
        this.errorMensajeBool = true;
        this.error[this.inputs.indexOf(name)] = true;
        this.errorMensaje = "Error, complete todos los campos";
        console.log("error");
      }
    });
    console.log(this.evento);
  }
}
