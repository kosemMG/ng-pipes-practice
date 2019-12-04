import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decrement'
})
export class DecrementPipe implements PipeTransform {

  transform(value: number): number {
    if (typeof value === 'number') {
      return value - 1;
    }
    return value;
  }

}
