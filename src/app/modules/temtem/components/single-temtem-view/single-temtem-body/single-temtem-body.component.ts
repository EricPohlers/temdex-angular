import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
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
export class SingleTemtemBodyComponent implements OnInit, OnChanges {
  @Input() temtem!: Temtem | undefined;
  types: Type[] = [];
  showModal: boolean = false;
  isLuma: boolean = false;
  environment = environment;
  isLoading: boolean = true;
  isLoadingEvolution: boolean = true;
  evolution!: Evolution | undefined;
  evolutionTree: Temtem[] = [];

  constructor(
    private typeService: TypeService,
    private temtemService: TemtemService,
    private store: Store
  ) {}

  ngOnInit(): void {
    // this.evolution = this.temtem?.evolution;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.setTypes();
    if (this.temtem?.evolution.evolves) {
      this.evolutionTree = this.getEvolution();
    }
  }

  toggleShowModal() {
    this.showModal = !this.showModal;
  }

  onLoad() {
    this.isLoading = false;
  }

  onLoadEvolution() {
    this.isLoadingEvolution = false;
  }

  onLuma() {
    this.isLuma = !this.isLuma;
    this.isLoading = true;
  }

  getEvolution(): Temtem[] {
    if (this.temtem?.evolution) {
      return this.temtem.evolution.evolutionTree.map((evo) =>
        this.getTemtem(evo.number)
      );
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

  onSetSelectedTemtem(temtem: Temtem) {
    this.store.dispatch(setSelectedTemtem({ selectedTemtem: temtem }));
    this.isLoading = true;
  }

  typeTrackByFn(id: number, type: Type): string {
    return type.name;
  }
}
