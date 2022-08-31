import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  collapsed = true;

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
