import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Gif, SearchGifsResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService { 
  private _historial: string[] = [];
  public results: Gif[] = []; 


  get historial(){ //obtener historial
    return[...this._historial]
  }
  
  constructor( private http: HttpClient){}

  gifSearch( query: string = ''){
    query = query.trim().toLowerCase();
    
    if( !this._historial.includes( query )) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10); // cut betwen 0 and 10
    }
    this.http.get<SearchGifsResponse>(`https://api.giphy.com/v1/gifs/search?api_key=5ZYuirHeyfsl4Qd8gCmSjwqRyfJUmX44&q=${query}&limit=10`)
      .subscribe((response ) => {
        console.log(response.data);
        this.results = response.data;
        // response.data[0].images.downsized_medium.url;
      });
  }
}
