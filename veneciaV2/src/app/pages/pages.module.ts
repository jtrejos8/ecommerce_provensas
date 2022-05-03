import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LandingComponent } from './landing/landing.component';
import { MainComponent } from './main/main.component';
import { TemplateModule } from '../template/template.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { StoreComponent } from './store/store.component';
import { B2bSalesComponent } from './b2b-sales/b2b-sales.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    LandingComponent,
    MainComponent,
    ContactUsComponent,
    StoreComponent,
    B2bSalesComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TemplateModule
  ]
})
export class PagesModule { }
