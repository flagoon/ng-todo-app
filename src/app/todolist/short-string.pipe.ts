import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortString'
})
export class ShortStringPipe implements PipeTransform {
  transform(value: string): string {
    if (value.length > 25) {
      return `${value.slice(0, 25)}...`;
    }
    return value;
  }
}
