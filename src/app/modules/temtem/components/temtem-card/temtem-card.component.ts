import { Component, Input, OnInit } from '@angular/core';
import { Type } from 'src/app/modules/shared/models/interfaces';
import { TypeService } from 'src/app/modules/shared/services/type.service';
import { environment } from 'src/environments/environment';
import { Temtem } from '../../models/interfaces';

@Component({
  selector: 'app-temtem-card',
  templateUrl: './temtem-card.component.html',
  styleUrls: ['./temtem-card.component.scss'],
})
export class TemtemCardComponent implements OnInit {
  @Input() temtem!: Temtem;
  @Input() showTemtemCallbackFunction!: (args: any) => void;
  environment = environment;
  types: Type[] = [];

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    this.setTypes();
  }

  setTypes() {
    this.temtem.types.map((type) => {
      this.types.push(this.typeService.getTypeByName(type));
    });
  }

  typeTrackByFn(id: number, type: Type): string {
    return type.name;
  }

  trackByFn(id: number, temtem: Temtem): number {
    return temtem.number;
  }
}
