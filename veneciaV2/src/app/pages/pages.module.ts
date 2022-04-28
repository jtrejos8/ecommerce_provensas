import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import { TemplateModule } from '../template/template.module';


@NgModule({
  declarations: [
    LandingComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TemplateModule
  ]
})
export class PagesModule { }
