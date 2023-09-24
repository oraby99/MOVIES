import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  term:any;
  currentPage = 1;
  pageNumbers:number[]=[];
  trendingAll= [];
  constructor(private _MovieService:MovieService) 
  {
    for(let i =1 ; i <11 ; i++)
    {
      this.pageNumbers.push(i);
    }

      _MovieService.getTrendingMovie(this.currentPage).subscribe( (data) => {
        this.trendingAll= data.results
      } )
   }
   changeNumber(ind:any)
   {
      this.currentPage  = ind;
      this._MovieService.getTrendingMovie(this.currentPage ).subscribe( (data) => {
      this.trendingAll= data.results
    } )
   }
   prev()
   {
      this.changeNumber(this.currentPage -1)
   }
   next()
   {
      this.changeNumber(this.currentPage +1)
   }

   

  ngOnInit(): void {
  }

}
