import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alumno'
})
export class AlumnoPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    return value + ' ' + args;
  }

}
