import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent implements OnInit {

  get historial(){
    return this.gifService.historial;
  }

  constructor( private gifService:  GifsService) { }

  ngOnInit(): void {
  }
// serch with click
  search( termino : string){
    this.gifService.gifSearch( termino );
  }

}
