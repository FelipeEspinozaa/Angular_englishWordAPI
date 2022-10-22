import { Component, Input, OnInit } from '@angular/core';
import { WordDefinitionsResponse } from '../../interfaces/word-definitions-interface';

@Component({
  selector: 'app-word-definitions',
  templateUrl: './word-definitions.component.html',
  styleUrls: ['./word-definitions.component.css']
})
export class WordDefinitionsComponent implements OnInit {

  @Input() definiciones!: WordDefinitionsResponse; 

  constructor() { }

  ngOnInit(): void {
  }

}
