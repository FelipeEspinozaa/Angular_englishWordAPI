import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent{

  @Output() onEnter: EventEmitter<string> = new EventEmitter;
  //INPUT
  @Input() placeholder: string = "";
  
  termino: string = "";

  constructor() { }

  buscar() {
    this.onEnter.emit( this.termino );
  }

}
