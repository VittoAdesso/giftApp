import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styles: [
  ]
})
export class SearchbarComponent implements OnInit {

  constructor( private gifService : GifsService) { }

  ngOnInit(): void {
  }

  @ViewChild('txtSearch') txtSearch!: ElementRef;

  search( ): void {
    const valor = this.txtSearch.nativeElement.value;
    this.gifService.gifSearch( valor); 
    this.txtSearch.nativeElement.value = ''; // to erase the input 
  }


}
