import { Routes } from '@angular/router';
import {GalleryComponent} from "./gallery/gallery.component";
import {HomeComponent} from "./home/home.component";
import {OrderComponent} from "./order/order.component";
import {PromoComponent} from "./promo/promo.component";
import {EventsComponent} from "./events/events.component";
import {AndrzejkiComponent} from "./events/andrzejki/andrzejki.component";
import {SylwesterComponent} from "./events/sylwester/sylwester.component";
import {WigiliaComponent} from "./events/wigilia/wigilia.component";

export const routes: Routes = [
  {
    path: '',
    loadComponent:() => HomeComponent
  },
  {
    path: 'gallery',
    loadComponent:() => GalleryComponent,
  },
  {
    path: 'order',
    loadComponent:() => OrderComponent,
  },
  {
    path: 'events',
    loadComponent:() => EventsComponent,
  },
  {
    path: 'events/wigilia',
    loadComponent:() => WigiliaComponent,
  },
  {
    path: 'events/andrzejki',
    loadComponent:() => AndrzejkiComponent,
  },
  {
    path: 'events/sylwester',
    loadComponent:() => SylwesterComponent,
  },
  {
    path: 'promo',
    loadComponent:() => PromoComponent
  }
];
