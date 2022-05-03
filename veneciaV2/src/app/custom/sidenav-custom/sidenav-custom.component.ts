import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

interface MenuItem {
  route: string;
  name: string;
  logo?: string;
}

@Component({
  selector: 'sidenav-custom',
  templateUrl: './sidenav-custom.component.html',
  styleUrls: ['./sidenav-custom.component.css']
})

export class SidenavCustomComponent {
  mobileQuery: MediaQueryList;

  menuItems: MenuItem[] = [
    {
      route: '/store',
      name: 'Tienda',
      logo: 'home'
    },
    {
      route: '/b2b-sales',
      name: 'Ventas Corporativas',
      logo: 'map'
    },
    {
      route: '/about-us',
      name: 'Nosotros',
      logo: 'lumb'
    },
    {
      route: '/contact-us',
      name: 'Contactanos',
      logo: 'info'
    },
  ];

  fillerNav = Array.from({length: 3}, (_, i) => `Nav Item ${i + 1}`);

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
  // logout(){}

}