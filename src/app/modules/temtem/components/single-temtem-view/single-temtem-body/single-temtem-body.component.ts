import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Type } from 'src/app/modules/shared/models/interfaces';
import { TypeService } from 'src/app/modules/shared/services/type.service';
import { environment } from 'src/environments/environment';
import { Temtem } from '../../../models/interfaces';

@Component({
  selector: 'app-single-temtem-body',
  templateUrl: './single-temtem-body.component.html',
  styleUrls: ['./single-temtem-body.component.scss'],
})
export class SingleTemtemBodyComponent implements OnChanges {
  @Input() temtem!: Temtem | undefined;
  types: Type[] = [];
  showModal: boolean = false;
  isLuma: boolean = false;
  environment = environment;
  isLoading: boolean = true;

  constructor(private typeService: TypeService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.setTypes();
  }

  toggleShowModal() {
    this.showModal = !this.showModal;
  }

  onLoad() {
    this.isLoading = false;
  }

  onLuma() {
    this.isLuma = !this.isLuma;
    this.isLoading = true;
  }

  setTypes() {
    this.types = [];
    if (this.temtem) {
      this.temtem.types.map((type) => {
        this.types.push(this.typeService.getTypeByName(type));
      });
    }
  }

  typeTrackByFn(id: number, type: Type): string {
    return type.name;
  }
}
