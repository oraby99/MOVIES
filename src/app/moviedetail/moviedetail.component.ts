import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  ind:any
  moviedetail:any={}
  constructor(_ActivatedRoute:ActivatedRoute , public _MovieService:MovieService)
  {

    this.ind = _ActivatedRoute.snapshot.paramMap.get("id")
   }

  ngOnInit(): void
  {
    this._MovieService.getTrendingid(this.ind).subscribe((data)=>
    {
      this.moviedetail = data

    })

  }

}
