import {Component, OnInit} from '@angular/core';
import {Pokemon} from './pokemon';
import {PokeApiService} from '../poke-api.service';


@Component({
  selector: 'app-pokesearch',
  templateUrl: './pokesearch.component.html',
  styleUrls: ['./pokesearch.component.css']
})
export class PokesearchComponent implements OnInit {
  title = 'pokedemo';
  searchedId;
  selectedpoke: number;
  // pokemons: Array<Pokemon>;
  public pokemons: Array<Pokemon> = [
    {id: 1, name: 'Pika'},
    {id: 2, name: 'Carapute'},
    {id: 3, name: 'Sacha'},
    {id: 4, name: 'Les amis de sacha '},
  ];

  constructor(private pokeApiService: PokeApiService) {
    // @ts-ignore
    // this.pokeApiService.getPokemonList().subscribe(pokemons => this.pokemons = pokemons);
    this.pokemons = [
      {id: 1, name: 'Pika'},
      {id: 2, name: 'Carapute'},
      {id: 3, name: 'Sacha'},
      {id: 4, name: 'Les amis de sacha '},
    ];
  }

  ngOnInit() {
  }

  toConsole() {
    console.log(this.searchedId);
    console.log(this.pokemons.pop());
    // console.log(this.pokemons[this.selectedpoke].name);
  }

  selectChangeHandler(event: any) {
    this.searchedId = event.target.value;
  }
}
