import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minVal'
})
export class MinValPipe implements PipeTransform {

  transform(value: number[]): number | number[] {
    if (value.length === 0) {
      return value;
    }
    return Math.min(...value);
  }

}
