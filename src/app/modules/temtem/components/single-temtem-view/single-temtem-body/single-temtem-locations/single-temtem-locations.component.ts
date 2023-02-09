import { Component, Input } from '@angular/core';
import { Location } from 'src/app/modules/temtem/models/interfaces';

@Component({
  selector: 'app-single-temtem-locations',
  templateUrl: './single-temtem-locations.component.html',
  styleUrls: ['./single-temtem-locations.component.scss'],
})
export class SingleTemtemLocationsComponent {
  @Input() locations: Location[] | undefined;
}
