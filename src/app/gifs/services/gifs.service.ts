import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService { 
  private _historial: string[] = [];
  
  get historial(){ //obtener historial
    return[...this._historial]
  }
  
  gifSearch( query: string = ''){
    query = query.trim().toLowerCase();
    
    if( !this._historial.includes( query )) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10); // cut betwen 0 and 10
    }
  }
}
