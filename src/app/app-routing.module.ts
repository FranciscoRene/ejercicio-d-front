import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { ReportesComponent } from './reportes/reportes.component';

const routes: Routes = [
  { path: '', component: PortadaComponent },
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'reportes', component: ReportesComponent }
  /*{ path: 'reportes', component: ReportesComponent, 
    children: [
      { path: 'detalle', component: Pagina4Component}
    ]
  }*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
