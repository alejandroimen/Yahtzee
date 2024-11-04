import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ijugada } from '../interfaces/ijugada';

@Component({
  selector: 'app-jugada',
  templateUrl: './jugada.component.html',
  styleUrl: './jugada.component.css'
})
export class JugadaComponent {
  @Input() jugada: Ijugada = {
    name: ''
  }
}
