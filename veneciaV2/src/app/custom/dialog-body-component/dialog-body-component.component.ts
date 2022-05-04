import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-body-component',
  templateUrl: './dialog-body-component.component.html',
  styleUrls: ['./dialog-body-component.component.css']
})
export class DialogBodyComponentComponent implements OnInit {

  prueba: object[] = [{id: 1, name: 'UNO'},{id: 1, name: 'DOS'},{id: 1, name: 'TRES'}];
  constructor() { }

  ngOnInit(): void {
  }

}
