import { Component } from '@angular/core';
import { Idado } from '../interfaces/idado';

@Component({
  selector: 'app-container-game',
  templateUrl: './container-game.component.html',
  styleUrl: './container-game.component.css'
})
export class ContainerGameComponent {
  bloq: number = -1
  dados: Idado[] = [ 
    {
      index: 0,
      value: 0,
      bloqueado: false
    },
    {
      index: 0,
      value: 0,
      bloqueado: false
    },
    {
      index: 0,
      value: 0,
      bloqueado: false
    },
    {
      index: 0,
      value: 0,
      bloqueado: false
    },
    {
      index: 0,
      value: 0,
      bloqueado: false
    }
  ]

  tirar():void {
    for (let i = 0; i < this.dados.length; i++) {
      this.dados[i].value = Math.floor(Math.random() * 5) + 1;
    }
    console.log(this.dados);
  }

  bloquear(i: number): void {
    this.dados[i].bloqueado = true
  }
  
}
