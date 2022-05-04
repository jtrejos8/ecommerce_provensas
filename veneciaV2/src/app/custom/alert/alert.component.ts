import { Component, OnInit, Input} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() type: string = '';

  constructor() { 
    // this.simpleAlert();
  }
  ngOnInit(): void {}

  simpleAlert(){
    console.log("hola");
  }
}
