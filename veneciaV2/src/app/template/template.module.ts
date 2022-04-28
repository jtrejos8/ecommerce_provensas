import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule
  ],
  exports: [
    SidenavComponent,
    FooterComponent
  ] 
})
export class TemplateModule { }
