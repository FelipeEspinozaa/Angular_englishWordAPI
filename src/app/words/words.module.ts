import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrincipalComponent } from './pages/principal/principal.component';
import { MisPalabrasComponent } from './pages/mis-palabras/mis-palabras.component';
import { VerPalabraComponent } from './pages/ver-palabra/ver-palabra.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';
import { WordDefinitionsComponent } from './components/word-definitions/word-definitions.component';
import { WordExamplesComponent } from './components/word-examples/word-examples.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    MisPalabrasComponent,
    VerPalabraComponent,
    BusquedaComponent,
    SubMenuComponent,
    WordDefinitionsComponent,
    WordExamplesComponent
  ],
  exports: [
    PrincipalComponent,
    MisPalabrasComponent,
    VerPalabraComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class WordsModule { }
