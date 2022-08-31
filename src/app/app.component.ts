import { Component, OnInit } from '@angular/core';
import { TypeService } from './modules/shared/services/type.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'temdex';

  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    // this.typeService.fetchTypes();
  }
}
