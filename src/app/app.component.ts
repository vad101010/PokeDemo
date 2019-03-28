import { Component } from '@angular/core';
import { Pokemon } from './pokesearch/pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  toConsole(selected) {
    console.log(selected);
  }
}

