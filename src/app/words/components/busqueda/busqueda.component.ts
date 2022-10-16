import { Component, ElementRef, ViewChild } from '@angular/core';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent{

  @ViewChild("txtBuscar") txtBuscar!: ElementRef<HTMLInputElement>;
  palabra_actual: string = "";

  constructor( private wordService: WordsService ) { }

  buscar() {
    const valor = this.txtBuscar.nativeElement.value;
    
    if( valor.trim().length === 0){
      return
    }
    
    this.palabra_actual = valor;
    this.wordService.buscarDefinicion( valor );
    this.txtBuscar.nativeElement.value = "";
  }

}
