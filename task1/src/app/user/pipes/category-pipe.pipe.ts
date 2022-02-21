import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/user/model/model';

@Pipe({
  name: 'categoryPipe'
})
export class CategoryPipePipe implements PipeTransform {

  transform(value: number, categories: Category[]): string | undefined {
    return categories?.find(data => data.id == value)?.name;
  }

}
