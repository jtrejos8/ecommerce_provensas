import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { AlertComponent } from './alert/alert.component';
import { SidenavCustomComponent } from './sidenav-custom/sidenav-custom.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    AlertComponent,
    SidenavCustomComponent
  ],
  imports: [
    CommonModule,
    CustomRoutingModule,
    MaterialModule
  ],
  exports: [
    AlertComponent,
    SidenavCustomComponent
  ]
})
export class CustomModule { }
