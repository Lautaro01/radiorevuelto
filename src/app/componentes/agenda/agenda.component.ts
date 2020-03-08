import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {


  constructor() { }

  eventos : any;
  calendarPlugins = [dayGridPlugin]; 

  ngOnInit(): void {
  }

}
