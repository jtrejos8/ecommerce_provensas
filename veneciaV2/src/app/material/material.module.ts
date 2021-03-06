import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';

import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    LayoutModule,
    MaterialRoutingModule,
    MatIconModule, // Icon
    MatDialogModule, // Dialog
    MatListModule, // List
    MatSidenavModule, // Sidenav
    MatToolbarModule, // Toolbar
  ],
  exports: [
    LayoutModule,
    MatIconModule,
    MatDialogModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ]
})
export class MaterialModule { }
