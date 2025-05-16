import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { AppComponent } from '../app.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { MenuComponent } from '../menu/menu.component';
import { ContactComponent } from '../contact/contact.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    CarouselComponent,
    MenuComponent,
    NgbModule,
    ContactComponent,
    AppComponent
  ],
  exports: [
    HeaderComponent,
    CarouselComponent,
    MenuComponent,
    ContactComponent,
    AppComponent
  ]
})
export class AppModule { }
