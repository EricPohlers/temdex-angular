import { Component, Input } from '@angular/core';
import {
  EvolutionTree,
  Temtem,
} from 'src/app/modules/temtem/models/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-single-temtem-evolution',
  templateUrl: './single-temtem-evolution.component.html',
  styleUrls: ['./single-temtem-evolution.component.scss'],
})
export class SingleTemtemEvolutionComponent {
  @Input() evolutions: Temtem[] = [];
  @Input() temtemNr: number = 0;
  @Input() onSetSelectedTemtemCallback!: (temtem: Temtem) => void;

  environment = environment;

  isLoadingEvolution: boolean = true;

  onLoadEvolution() {
    this.isLoadingEvolution = false;
  }
}
