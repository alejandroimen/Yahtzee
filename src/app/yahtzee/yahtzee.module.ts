import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DadoComponent } from './dado/dado.component';
import { JugadaComponent } from './jugada/jugada.component';
import { ContainerGameComponent } from './container-game/container-game.component';

@NgModule({
  declarations: [
    DadoComponent,
    JugadaComponent,
    ContainerGameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DadoComponent,
    JugadaComponent,
    ContainerGameComponent
  ]
})
export class YahtzeeModule { }
