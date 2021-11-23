import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, searchText: string) {
    if (searchText === '') {
      return value;
    }
    const results = [];
    for (const result of value) {
      if (result['name'] === searchText) {
        results.push(result);
      }
    }
    return results;
  }
}
