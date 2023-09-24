import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'more'
})
export class MorePipe implements PipeTransform {

  transform(desc:string,limit:number): any {
    return desc.substring(0,limit);
  }

}
