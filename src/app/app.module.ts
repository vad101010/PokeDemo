import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PokesearchComponent} from './pokesearch/pokesearch.component';
import {FormsModule} from '@angular/forms';
import {FilterPokemonPipPipe} from './filter-pokemon--pip.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokesearchComponent,
    FilterPokemonPipPipe
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
