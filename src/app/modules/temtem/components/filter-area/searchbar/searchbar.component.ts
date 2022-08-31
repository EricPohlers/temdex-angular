import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSearchTerm } from 'src/app/modules/core/store/temtem/temtem.actions';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
})
export class SearchbarComponent {
  searchTerm: string = '';
  constructor(private store: Store) {}

  updateSearchTerm() {
    this.store.dispatch(setSearchTerm({ searchTerm: this.searchTerm }));
  }
}
