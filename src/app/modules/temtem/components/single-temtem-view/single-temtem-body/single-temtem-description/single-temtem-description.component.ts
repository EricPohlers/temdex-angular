import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-temtem-description',
  templateUrl: './single-temtem-description.component.html',
  styleUrls: ['./single-temtem-description.component.scss'],
})
export class SingleTemtemDescriptionComponent {
  @Input() description: string | undefined = '';
}
