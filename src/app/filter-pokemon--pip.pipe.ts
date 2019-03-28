import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPip'
})
export class FilterPokemonPipPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) {return null; }
    if (!args) {return value; }
    args = args.toLowerCase();
    return value.filter(item => JSON.stringify(item).toLowerCase().includes(args));
  }

}
