import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './pages/principal/principal.component';
import { MisPalabrasComponent } from './pages/mis-palabras/mis-palabras.component';
import { VerPalabraComponent } from './pages/ver-palabra/ver-palabra.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { SubMenuComponent } from './components/sub-menu/sub-menu.component';



@NgModule({
  declarations: [
    PrincipalComponent,
    MisPalabrasComponent,
    VerPalabraComponent,
    BusquedaComponent,
    SubMenuComponent
  ],
  exports: [
    PrincipalComponent,
    MisPalabrasComponent,
    VerPalabraComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WordsModule { }
