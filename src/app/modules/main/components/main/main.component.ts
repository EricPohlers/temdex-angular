import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/modules/shared/services/type.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private typeService: TypeService) {}

  ngOnInit(): void {
    // console.log(this.typeService.getTypes());
  }
}
