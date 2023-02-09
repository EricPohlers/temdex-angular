import { Component, Input } from '@angular/core';
import { Type } from 'src/app/modules/shared/models/interfaces';
import { GenderRatio } from 'src/app/modules/temtem/models/interfaces';

@Component({
  selector: 'app-single-temtem-details',
  templateUrl: './single-temtem-details.component.html',
  styleUrls: ['./single-temtem-details.component.scss'],
})
export class SingleTemtemDetailsComponent {
  @Input() types: Type[] = [];
  @Input() height: number | undefined = 0;
  @Input() weight: number | undefined = 0;
  @Input() gender!: GenderRatio | undefined;

  typeTrackByFn(id: number, type: Type): string {
    return type.name;
  }
}
