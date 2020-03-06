import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './componentes/header/header.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { EscuchanosComponent } from './componentes/escuchanos/escuchanos.component';
import { DiscosComponent } from './componentes/discos/discos.component';
import { AgendaComponent } from './componentes/agenda/agenda.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/inicio' },
  {path:'',component:HeaderComponent,children: [
    {path:'inicio',component:InicioComponent},
    {path:'contactanos',component:ContactanosComponent},
    {path:'escuchanos',component:EscuchanosComponent},
    {path:'discos',component:DiscosComponent},
    {path:'agenda',component:AgendaComponent},


  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
