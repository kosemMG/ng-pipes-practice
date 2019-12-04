import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxVal'
})
export class MaxValPipe implements PipeTransform {

  transform(value: number[]): number | number[] {
    if (value.length === 0) {
      return value;
    }
    return Math.max(...value);
  }

}
