import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tercer-componente',
  templateUrl: './tercer-componente.component.html',
  styleUrl: './tercer-componente.component.css',
  imports: [NgFor],
})
export class TercerComponenteComponent {
  arrayAlumnas = [
    {id: 1, nombre: 'Alicia', kahoot: [1, 2, 1, 1]},
    {id: 2, nombre: 'Julia', kahoot: [3, 1, 4, 2]},
    {id: 3, nombre: 'Celeste', kahoot: [2, 4, 3, 4]},
    {id: 4, nombre: 'Jazmin', kahoot: [4, 3, 2, 3]},
  ]
}
