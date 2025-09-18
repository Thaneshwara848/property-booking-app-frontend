import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sqr',
  standalone: true
})
export class SqrPipe implements PipeTransform {

  transform(value: any): unknown {


    return value * value;
  }

}
