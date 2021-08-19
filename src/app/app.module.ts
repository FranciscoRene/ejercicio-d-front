import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortadaComponent } from './portada/portada.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { ReportesComponent } from './reportes/reportes.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';

@NgModule({
  declarations: [
    AppComponent,
    PortadaComponent,
    MenuLateralComponent,
    ReportesComponent,
    BienvenidaComponent,
    MenuSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
