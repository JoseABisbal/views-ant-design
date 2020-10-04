import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  tabs = [
    {
      name: 'Step 1',
      disabled: false
    },
    {
      name: 'Step 2',
      disabled: false
    }
  ];
}
