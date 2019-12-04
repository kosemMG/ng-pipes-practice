import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uncapitalise'
})
export class UncapitalisePipe implements PipeTransform {

  transform(value: string): string {
    if (value) {
      return value[0].toLowerCase() + value.slice(1);
    }
    return value;
  }

}
