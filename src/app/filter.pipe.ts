import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(country: any, term: any): any {
    if (term === undefined) return country;
    else return country.filter(obj => obj.name.toLowerCase().includes(term.toLowerCase()))
  }

}
