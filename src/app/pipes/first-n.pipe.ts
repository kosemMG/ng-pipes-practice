import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstN'
})
export class FirstNPipe implements PipeTransform {

  transform(value: string[], n: number): string[] {
    if (value.length === 0) {
      return value;
    }
    return value.slice(0, n);
  }

}
