import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService { 

  private rutaDiscos : string = "http://revueltoderadio.com/api/v1/discos/";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/html; charset=UTF-8',
      "Access-Control-Allow-Origin" : "*",
      "Access-Control-Allow-Methods" : "GET,POST,PUT,DELETE,OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    })
  }
  
  constructor(private http : HttpClient, private ruta : Router) { }

  traerDiscos()
  {
    return this.http.get(this.rutaDiscos);
  }

  traerUnDisco(id)
  {
    let datos = new FormData;
    datos.append("id",id);
    this.ruta.navigateByUrl("/disco");
    return this.http.post(this.rutaDiscos,datos);
  }

  traerEventosAgenda()
  {
    return this.http.get("http://revueltoderadio.com/api/v1/events/");
  }
}
