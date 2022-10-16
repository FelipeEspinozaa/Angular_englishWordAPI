import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { WordsModule } from './words/words.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    SharedModule,
    WordsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
