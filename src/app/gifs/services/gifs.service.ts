import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService { 
  private _historial: string[] = [];
  public results: any[] = []; 


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
    this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=5ZYuirHeyfsl4Qd8gCmSjwqRyfJUmX44&q=${query}&limit=10`)
      .subscribe((resp: any) => {
        console.log(resp.data);
        this.results = resp.data;
      });
  }
}
