import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from '../pokesearch/pokemon';
import {PokeApiService} from '../poke-api.service';

@Component({
  selector: 'app-poke-show',
  templateUrl: './poke-show.component.html',
  styleUrls: ['./poke-show.component.css']
})
export class PokeShowComponent implements OnInit {
  @Input() pokemon: Pokemon;

  constructor() {
  }

  ngOnInit() {
  }

}
