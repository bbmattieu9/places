import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tester'
})
export class TesterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
