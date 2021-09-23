import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraContatoComponent } from './barra-contato/barra-contato.component';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraContatoComponent,
    BarraMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
