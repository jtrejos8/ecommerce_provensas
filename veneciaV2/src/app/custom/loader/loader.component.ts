import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
    this._router.events.subscribe(event => {
      if( event instanceof NavigationStart){
          this.show = true;
      }else if ( event instanceof NavigationEnd){
          this.show = false;
      }
      delay(900000);
    })
  } 
  
  show = false;
}
