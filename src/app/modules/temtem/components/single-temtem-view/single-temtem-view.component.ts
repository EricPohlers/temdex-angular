import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Type } from 'src/app/modules/shared/models/interfaces';
import { TypeService } from 'src/app/modules/shared/services/type.service';
import { environment } from 'src/environments/environment';
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
