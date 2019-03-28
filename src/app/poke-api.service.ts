import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from './pokesearch/pokemon';
import {Observable} from 'rxjs';
import {resource} from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private pokemons: Array<Pokemon> = new Array<Pokemon>();

  constructor(private http: HttpClient) {
  }

  getPokemonList(): Array<Pokemon> {
    // les 1000 premiers
    this.http.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000').subscribe(res => {
      let results = res['results'];
      let i = 1;
      for (let unpoke of results) {
        this.pokemons.push({id: i, name: unpoke.name, url: unpoke.url});
        i++;
      }
    });
    return this.pokemons;
  }

  getPokemon(url: string): Pokemon {
    if (url == null) {
      url = 'https://pokeapi.co/api/v2/pokemon/1/';
    }
    return null;
  }
}
