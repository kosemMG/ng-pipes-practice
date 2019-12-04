import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'capitalise'
})
export class CapitalisePipe implements PipeTransform {
  transform(value: string, arg): string {
    if (value) {
      return value[0].toUpperCase() + value.slice(1, value.length);
    }
    return value;
  }
}