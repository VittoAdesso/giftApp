import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPagesComponent } from './gifs-pages/gifs-pages.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ResultsOFsearchComponent } from './results-ofsearch/results-ofsearch.component';



@NgModule({
  declarations: [
    GifsPagesComponent,
    SearchbarComponent,
    ResultsOFsearchComponent
  ],
  exports:[
    GifsPagesComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
