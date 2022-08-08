import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results-ofsearch',
  templateUrl: './results-ofsearch.component.html',
  styles: [
  ]
})
export class ResultsOFsearchComponent implements OnInit {

  constructor( private gifService : GifsService) { }

  get results() { 
    return this.gifService.results; }
    
  ngOnInit(): void {
  }

}
