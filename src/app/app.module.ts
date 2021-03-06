import { HeroeComponent } from './heroes/heroe/heroe.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoComponent } from './heroes/listado/listado.component';

import { VillanosComponent } from './heroes/villanos/villanos.component';



@NgModule({
  declarations: [
    AppComponent,
    HeroeComponent,
    ListadoComponent,
    VillanosComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }