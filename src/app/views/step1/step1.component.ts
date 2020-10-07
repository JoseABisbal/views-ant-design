import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
