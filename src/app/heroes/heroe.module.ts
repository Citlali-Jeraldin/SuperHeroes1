import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { VillanosComponent } from './villanos/villanos.component';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent,
    VillanosComponent
  ],
  exports: [
    ListadoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule{

}