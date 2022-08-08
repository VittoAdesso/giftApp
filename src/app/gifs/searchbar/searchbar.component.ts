import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styles: [
  ]
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('txtSearch') txtSearch!: ElementRef;

  search( ): void {
    const valor = this.txtSearch.nativeElement.value;
    console.log(valor);
    this.txtSearch.nativeElement.value = ''; // to erase the input 
  }

}
