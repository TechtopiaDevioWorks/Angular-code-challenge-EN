import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'licensePlate',
})
export class LicensePlatePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (!value) return value;
    if (typeof value !== 'string') return value;
    let newValue = value.replace(/-|\s/g, '').trim();
    const digitRegex = /(\d+)/g;
    newValue = newValue
      .replace(digitRegex, (match) => ' ' + match + ' ')
      .trim()
      .replace(/\s/g, '-');
    const multiLetterRegex = /([a-zA-Z]{4})/g;
    let matches = newValue.match(multiLetterRegex);
    while (matches) {
      const match = matches[0];
      newValue = newValue.replace(
        match,
        match.slice(0, 2) + ' ' + match.slice(2)
      );
      matches = newValue.match(multiLetterRegex);
    }
    return newValue.trim().replace(/\s/g, '-').toLocaleUpperCase();
  }
}
