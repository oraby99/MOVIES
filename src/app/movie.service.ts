import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient:HttpClient)
  {
    // _HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=45696c940c63fb6311ca8115ffa3ccfb")
  }
  getTrendingAll(pageNumber:any):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/week?api_key=45696c940c63fb6311ca8115ffa3ccfb&page="+pageNumber)
  }
  getTrendingid(id:any):Observable<any>
  {

    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=45696c940c63fb6311ca8115ffa3ccfb`)
  }
  getTrendingMovie(pageNumber :any):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/week?api_key=8c4a17696dab522853861e576ee44805&page="+pageNumber)
  }
  getTrendingTv(pageNumber:any):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/tv/week?api_key=8c4a17696dab522853861e576ee44805&page="+pageNumber)
  }
  getTrendingPeople(pageNumber :any):Observable<any>
  {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/week?api_key=8c4a17696dab522853861e576ee44805&page="+pageNumber)
  }
}
