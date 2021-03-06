import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EscuchanosComponent } from './componentes/escuchanos/escuchanos.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

import { HttpClientModule } from '@angular/common/http';
import { DiscosComponent } from './componentes/discos/discos.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { RadiosComponent } from './componentes/radios/radios.component'; 
import { FullCalendarModule } from '@fullcalendar/angular';
import { DiscoreviewComponent } from './discoreview/discoreview.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FormularioComponent } from './componentes/formulario/formulario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ContactanosComponent,
    EscuchanosComponent,
    DiscosComponent,
    AgendaComponent,
    RadiosComponent,
    DiscoreviewComponent,
    FormularioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FullCalendarModule,
    LeafletModule.forRoot(),
    FormsModule
  ],
  providers: [
    {provide : LocationStrategy , useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
