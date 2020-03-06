import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import esLocale from '@fullcalendar/core/locales/es';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  calendarPlugins = [dayGridPlugin]; // important!

  constructor() { }

  eventos = [
    { title: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaapepe', date: '2020-03-06' }
  ];

  opciones = {
    pluguis : [dayGridPlugin],
    defaultDate: new Date(),
    locale: esLocale,
    header: {
      left: 'prev,next'
    }
  }

  ngOnInit(): void {
  }

}
