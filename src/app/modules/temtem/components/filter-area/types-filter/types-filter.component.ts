import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSelectedTypes } from 'src/app/modules/core/store/temtem/temtem.selectors';
import { Type } from 'src/app/modules/shared/models/interfaces';
import { TypeService } from 'src/app/modules/shared/services/type.service';

@Component({
  selector: 'app-types-filter',
  templateUrl: './types-filter.component.html',
  styleUrls: ['./types-filter.component.scss'],
})
export class TypesFilterComponent implements OnInit {
  types: Type[] = [];
  selectedTypes!: ReadonlyArray<Type>;

  constructor(private typeService: TypeService, private store: Store) {}

  ngOnInit(): void {
    this.types = this.typeService.getTypes();
    this.store.select(selectSelectedTypes).subscribe((types) => {
      this.selectedTypes = types;
    });
  }

  updateSelectedTypes(clickedType: Type) {
    this.typeService.updateSelectedTypes(clickedType, this.selectedTypes);
  }

  typeTrackByFn(id: number, type: Type): string {
    return type.name;
  }
}
