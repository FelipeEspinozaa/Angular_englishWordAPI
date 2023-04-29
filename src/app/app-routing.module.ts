import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PrincipalComponent } from './words/pages/principal/principal.component';
import { WordDefinitionsComponent } from './words/components/word-definitions/word-definitions.component';
import { WordExamplesComponent } from './words/components/word-examples/word-examples.component';

const routes: Routes = [
  {
    path: '/principal',
    component: WordDefinitionsComponent,
    pathMatch: "full"
  },
  {
    path: '/principal/definicion',
    component: WordExamplesComponent,
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRoutingModule { }
