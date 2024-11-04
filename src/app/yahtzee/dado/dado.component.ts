import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Idado } from '../interfaces/idado';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {
  @Input() numberS: boolean = false
  @Output() numberSChange = new EventEmitter<number>()
  @Input() dado: Idado = {
    index: 0,
    value: 0,
    bloqueado: false
  }

  bloquear():void {
    this.numberSChange.emit(this.dado.index)
  }
}
