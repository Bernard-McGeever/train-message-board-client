import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowerCamelToUpper'
})
export class LowerCamelToUpperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.replace(/([A-Z])/g, " $1").toUpperCase();
  }

}
