import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pokemon} from './pokesearch/pokemon';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor(private http: HttpClient) {
  }

  getPokemonList(): Observable<Pokemon[]> {
    // les 1000 premiers
    return this.http.get<Pokemon[]>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1000');
  }
}
