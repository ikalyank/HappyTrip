import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustomDatePipe'
})
export class MyCustomDatePipePipe implements PipeTransform {

  transform(value: Date): string {
    var dd = String(value.getDate()). padStart(2, '0');
    var mm = String(value.getMonth() + 1). padStart(2, '0'); //January is 0!
    var yyyy = value. getFullYear();
    const final = mm + '/' + dd + '/' + yyyy;
    return final;
  }

}
