import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-dashboard *ngIf="show"></app-dashboard>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  show = true;
}
