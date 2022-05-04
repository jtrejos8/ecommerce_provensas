import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertComponent } from './alert/alert.component';
import { CustomRoutingModule } from './custom-routing.module';
import { FormsModule } from '@angular/forms';
import { LoaderComponent } from './loader/loader.component';
import { MaterialModule } from '../material/material.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { SidenavCustomComponent } from './sidenav-custom/sidenav-custom.component';
import { SelectComponent } from './select/select.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogBodyComponentComponent } from './dialog-body-component/dialog-body-component.component';
import { DialogComponent } from './dialog/dialog.component';

@NgModule({
  declarations: [
    AlertComponent,
    SidenavCustomComponent,
    LoaderComponent,
    SelectComponent,
    DialogBodyComponentComponent,
    DialogComponent
  ],
  imports: [
    CommonModule,
    CustomRoutingModule,
    MaterialModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AlertComponent,
    DialogComponent,
    DialogBodyComponentComponent,
    SidenavCustomComponent,
    LoaderComponent
  ]
})
export class CustomModule { }
