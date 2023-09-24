import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(movie: any[], term: string): any 
  {
    if (term == undefined)
    {
     return movie;
    }

    return movie.filter(function(movie)
    {
     // return movie.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
           if( movie.title)
             return movie.title.toLocaleLowerCase().includes(term.toLocaleLowerCase())
           else if(movie.name)
           return movie.name.toLocaleLowerCase().includes(term.toLocaleLowerCase())

            });
  }
  

}
