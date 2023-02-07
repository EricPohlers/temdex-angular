import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectAllTemtems } from '../../core/store/temtem/temtem.selectors';
import { Type } from '../../shared/models/interfaces';
import { Temtem } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TemtemService {
  constructor(private store: Store) {}

  filterTemtems(
    searchTerm: string,
    selectedTypes: ReadonlyArray<Type>,
    temtemsListAll: ReadonlyArray<Temtem>
  ): Temtem[] {
    if (searchTerm !== '') {
      return temtemsListAll.filter(
        (temtem) =>
          temtem.name.toUpperCase().includes(searchTerm.toUpperCase()) &&
          this.checkIfTypesInSelectedTypes(selectedTypes, temtem)
      );
    }
    return temtemsListAll.filter((temtem) => {
      return this.checkIfTypesInSelectedTypes(selectedTypes, temtem);
    });
  }

  checkIfTypesInSelectedTypes(
    selectedTypes: ReadonlyArray<Type>,
    temtem: Temtem
  ) {
    return (
      selectedTypes.filter((selectedType) =>
        temtem.types.includes(selectedType.name)
      ).length > 0
    );
  }

  getTemtem(temtemNr: number) {
    let returnValue!: Temtem;
    this.store.select(selectAllTemtems).subscribe((state) => {
      returnValue = state.filter((temtem) => {
        return temtem.number === temtemNr;
      })[0];
    });
    return returnValue;
  }
}
