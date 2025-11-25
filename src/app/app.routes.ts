import { Routes } from '@angular/router';
import {GalleryComponent} from "./gallery/gallery.component";
import {HomeComponent} from "./home/home.component";
import {OrderComponent} from "./order/order.component";
import {PromoComponent} from "./promo/promo.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'promo',
    component: PromoComponent
  }
];
