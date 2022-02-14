import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {


  transform(value: any, searchTerm : any): any {
    if(value.length === 0 || value === undefined){
      return value;
    }else {
      return value.filter(function(search : any){
        return search.firstName.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
      });
    }
  }
}
