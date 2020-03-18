import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { EscuchanosComponent } from './componentes/escuchanos/escuchanos.component';
import { DiscosComponent } from './componentes/discos/discos.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';
import { RadiosComponent } from './componentes/radios/radios.component';
import { DiscoreviewComponent } from './discoreview/discoreview.component';


const routes: Routes = [
  // {path:'**',redirectTo:''},
  {path: '', pathMatch: 'full', redirectTo: '/inicio' },
  {path:'',component:HeaderComponent,children: [
    {path:'inicio',component:InicioComponent},
    {path:'contactanos',component:ContactanosComponent},
    {path:'escuchanos',component:EscuchanosComponent},
    {path:'discos',component:DiscosComponent},
    {path:'disco/:id',component:DiscoreviewComponent},
    {path:'agenda',component:AgendaComponent},
    {path:'radios',component:RadiosComponent},


  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
