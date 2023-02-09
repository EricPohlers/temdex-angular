import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSelectedTemtem } from 'src/app/modules/core/store/temtem/temtem.actions';
import { Type } from 'src/app/modules/shared/models/interfaces';
import { TypeService } from 'src/app/modules/shared/services/type.service';
import { environment } from 'src/environments/environment';
import { Evolution, Temtem } from '../../../models/interfaces';
import { TemtemService } from '../../../services/temtem.service';

@Component({
  selector: 'app-single-temtem-body',
  templateUrl: './single-temtem-body.component.html',
  styleUrls: ['./single-temtem-body.component.scss'],
})
export class SingleTemtemBodyComponent implements OnChanges {
  @Input() temtem!: Temtem | undefined;
  types: Type[] = [];
  showModal: boolean = false;
  environment = environment;

  evolution!: Evolution | undefined;
  evolutionTree: Temtem[] = [];

  constructor(
    private typeService: TypeService,
    private temtemService: TemtemService,
    private store: Store
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setTypes();
    if (this.temtem?.evolution.evolves) {
      this.evolutionTree = this.getEvolution();
    }
  }

  toggleShowModal() {
    this.showModal = !this.showModal;
  }

  getEvolution(): Temtem[] {
    if (this.temtem?.evolution) {
      return [
        ...new Set(
          this.temtem.evolution.evolutionTree
            .filter((element, index) => {
              return (
                this.temtem?.evolution.evolutionTree.indexOf(element) === index
              );
            })
            .map((evo) => this.getTemtem(evo.number))
        ),
      ];
    }
    return [];
  }

  getTemtem(temtemNr: number): Temtem {
    return this.temtemService.getTemtem(temtemNr);
  }

  setTypes() {
    this.types = [];
    if (this.temtem) {
      this.temtem.types.map((type) => {
        this.types.push(this.typeService.getTypeByName(type));
      });
    }
  }

  onSetSelectedTemtem = (temtem: Temtem) => {
    this.store.dispatch(setSelectedTemtem({ selectedTemtem: temtem }));
    // this.isLoading = true;
  };
}
