import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { CustomModule } from '../custom/custom.module';


@NgModule({
  declarations: [
    SidenavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    CustomModule
  ],
  exports: [
    SidenavComponent,
    FooterComponent
  ] 
})
export class TemplateModule { }
