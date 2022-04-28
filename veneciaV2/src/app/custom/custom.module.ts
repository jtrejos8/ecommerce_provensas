import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomRoutingModule } from './custom-routing.module';
import { AlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    AlertComponent
  ],
  imports: [
    CommonModule,
    CustomRoutingModule
  ],
  exports: [
    AlertComponent
  ]
})
export class CustomModule { }
