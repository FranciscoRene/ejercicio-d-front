import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { NavegacionComponent } from './navegacion-lateral/navegacion.component';
import { NavbarComponent } from './navegacion-barra/navbar.component';
import { ReportesComponent } from './reportes/reportes.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    NavegacionComponent,
    NavbarComponent,
    ReportesComponent,
    BienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
