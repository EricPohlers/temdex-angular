import { Component } from '@angular/core';

@Component({
  selector: 'app-filter-area',
  templateUrl: './filter-area.component.html',
  styleUrls: ['./filter-area.component.scss'],
})
export class FilterAreaComponent {
  searchTerm: string = '';
  onSearchTermChange(value: string) {
    this.searchTerm = value;
  }
}
