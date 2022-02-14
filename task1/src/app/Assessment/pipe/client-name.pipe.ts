import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/user2';

@Pipe({
  name: 'clientName'
})
export class ClientNamePipe implements PipeTransform {

  transform(value: number, arg: Client[]): string | undefined {
    return arg?.find(data => data.id == value)?.name
  }

}
