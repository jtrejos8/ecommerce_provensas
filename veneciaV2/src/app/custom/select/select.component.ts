import { Component, OnInit, NgModule, ViewChild, Input } from '@angular/core';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  @Input() data: object[] = [];

  constructor() { }

  ngOnInit(): void {}

selectedCity: any;
}
