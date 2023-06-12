import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (typeof value === "string") {
      return value.charAt(0).toLocaleUpperCase() + value.slice(1);
    } else {
      return value;
    }
  }

}
