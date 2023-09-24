import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

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

      _MovieService.getTrendingPeople(this.currentPage).subscribe( (data) => {
        this.trendingAll= data.results
      } )
   }
   changeNumber(ind:any)
   {
      this.currentPage  = ind;
      this._MovieService.getTrendingPeople(this.currentPage ).subscribe( (data) => {
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
