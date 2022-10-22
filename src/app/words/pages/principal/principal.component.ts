import { Component } from '@angular/core';
import { WordDefinitionsResponse } from '../../interfaces/word-definitions-interface';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styles: [
  ]
})
export class PrincipalComponent{

  palabra: string = "";
  hayError: boolean = false;
  definiciones!: WordDefinitionsResponse; //con esto decimos que estamos seguro que nos traerá la información que viene dentro del tipo "WordDefinitionsResponse"

  constructor( private wordService: WordsService) { }

  buscar ( termino: string ) {
    this.hayError = false;
    this.palabra = termino;

    this.wordService.buscarDefinicion( this.palabra )
      .subscribe( (definiciones) => {
        this.definiciones = definiciones;
        console.log(this.definiciones);
      }, (err) => {
        this.hayError = true;
      })
  }


}
