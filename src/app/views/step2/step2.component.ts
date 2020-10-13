import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  selectedProvince = 'English';
  selectedCity = 'Hangzhou';
  provinceData = ['English', 'Jiangsu'];
  cityData: { [place: string]: string[] } = {
    English: ['English (USA)', 'English (Canada)'],
    Jiangsu: ['Nanjing', 'Suzhou', 'Zhenjiang']
  };

  provinceChange(value: string): void {
    this.selectedCity = this.cityData[value][0];
  }
  constructor() { }

  ngOnInit(): void {
  }

}
