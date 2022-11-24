import { EventEmitter } from '@angular/core';
import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchTerms = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {

  }

  search(term: string) {
    this.searchTerms.emit(term);
  }

}
