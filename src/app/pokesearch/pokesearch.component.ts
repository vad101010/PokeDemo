import {Component, OnInit} from '@angular/core';
import {Pokemon} from './pokemon';
import {PokeApiService} from '../poke-api.service';
import {PokeShowComponent} from '../poke-show/poke-show.component';


@Component({
  selector: 'app-pokesearch',
  templateUrl: './pokesearch.component.html',
  styleUrls: ['./pokesearch.component.css']
})
export class PokesearchComponent implements OnInit {
  title = 'pokedemo';
  selectedpoke: number;
  selectedPokemon: Pokemon;
  selectedUrl: string = null;
  // pokemons: Array<Pokemon>;
  public pokemons: Array<Pokemon> = [
    {id: 1, name: 'Pika', url: 'Pika'},
    {id: 2, name: 'Carapute', url: 'Carapute'},
    {id: 3, name: 'Sacha', url: 'Sacha'},
    {id: 4, name: 'Les amis de sacha', url: 'Les amis de sacha'},
  ];
  searchedName;

  constructor(private pokeApiService: PokeApiService) {
    // @ts-ignore
  }

  ngOnInit() {
    this.pokemons = this.pokeApiService.getPokemonList();
  }

  showPokeInfo() {
    // PokeShowComponent();
    this.selectedPokemon = this.pokeApiService.getPokemon(this.selectedUrl);
    this.searchedName = this.selectedpoke;
  }

  selectChangeHandler(event: any) {
    this.selectedUrl = event.target.value;
    console.log(event.target.value);
  }
}
