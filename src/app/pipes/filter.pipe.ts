import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: string[], filter: string): string[] {
    if (value.length === 0) {
      return value;
    }
    const resultArray: string[] = [];
    for (const item of value) {
      if (item.includes(filter)) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
