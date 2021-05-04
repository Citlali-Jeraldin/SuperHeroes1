import { Component, VERSION} from '@angular/core';
import {Villano}from "./villano";
import{VILLANOS} from'../mock-villanos';
@Component({
  selector: 'app-villanos',
  templateUrl: './villanos.component.html',
  styleUrls: ['./villanos.component.css']
})
export class VillanosComponent {
  villanos = VILLANOS;
  selectedVillano?: Villano;

  constructor() { }

  ngOnInit(): void {
  }
  onSelect(villano: Villano): void {
    this.selectedVillano = villano;
  }
  name = 'Angular' + VERSION.major;

  title: String = "Aumento de poder de villano";
  numero: number = 10 ;
  base: number = 1 ;
  acumular(valor : number){
    this.numero += valor;
  }
} 