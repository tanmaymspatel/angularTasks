import { Pipe, PipeTransform } from '@angular/core';
import { Office } from '../models/user2';

@Pipe({
  name: 'officeName'
})
export class OfficeNamePipe implements PipeTransform {

  transform(value: number, arg: Office[]): string | undefined {
    return arg?.find(data => data.id == value)?.name;
  }
}
