import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitNumber',
  standalone: true
})
export class DigitNumberPipe implements PipeTransform {

  transform(value: number, digits: number): string {
    return value.toString().padStart(digits, '0');
  }

}
