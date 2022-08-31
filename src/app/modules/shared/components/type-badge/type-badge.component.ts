import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Type } from '../../models/interfaces';

@Component({
  selector: 'app-type-badge',
  templateUrl: './type-badge.component.html',
  styleUrls: ['./type-badge.component.scss'],
})
export class TypeBadgeComponent {
  @Input() type!: Type;
  environment = environment;
}
