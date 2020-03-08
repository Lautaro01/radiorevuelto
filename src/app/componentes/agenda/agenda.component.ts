import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';
import { GlobalServiceService } from 'src/app/servicios/global-service.service';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {


  constructor(private servis : GlobalServiceService) { }
  locales = [esLocale];

  events: any;

  calendarPlugins = [dayGridPlugin]; 

  ngOnInit(): void {
    this.servis.traerEventosAgenda().subscribe(
      datos=>{
        this.events = datos;
        console.log(datos);
      }
    )
  }

}
