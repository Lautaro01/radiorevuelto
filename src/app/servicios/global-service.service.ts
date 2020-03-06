import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService { 

  rutaDiscos : string = "http://ravueltoderadio.com/server/v1/discos";

  httpOptions = {
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
    return this.http.post(this.rutaDiscos);
  }

  traerUnDisco(id)
  {
    this.ruta.navigateByUrl("/disco");
    return this.http.get(this.rutaDiscos) + "/" + id;
  }
}
