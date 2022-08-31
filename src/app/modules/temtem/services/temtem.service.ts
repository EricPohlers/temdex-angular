import { Injectable } from '@angular/core';
import { Type } from '../../shared/models/interfaces';
import { Temtem } from '../models/interfaces';

@Injectable({
  providedIn: 'root',
})
export class TemtemService {
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
}
