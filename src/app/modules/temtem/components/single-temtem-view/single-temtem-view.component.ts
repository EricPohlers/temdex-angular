import { Component, Input } from '@angular/core';

import { Temtem } from '../../models/interfaces';

@Component({
  selector: 'app-single-temtem-view',
  templateUrl: './single-temtem-view.component.html',
  styleUrls: ['./single-temtem-view.component.scss'],
})
export class SingleTemtemViewComponent {
  @Input() temtem!: Temtem | undefined;
  showModal: boolean = false;

  constructor() {}

  toggleShowModal() {
    this.showModal = !this.showModal;
  }
}
