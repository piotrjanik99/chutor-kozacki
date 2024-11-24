import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import {MenuListComponent} from "./menu-list/menu-list.component";
import {DISH_DESCRIPTIONS} from "../constants/dishes.constants";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CarouselComponent, MenuListComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements OnInit{
  dishImage: string[] = [''];
  dishImageDescription: string[] = [''];
  dishTitle: string[] = [''];

  ngOnInit(): void {
    this.dishImage = ['dish1.png', 'dish2.png', 'dish3.png', 'dish4.png'];
    this.dishTitle = ['Pieczeń z daniela', 'Kozak Burger', 'Borszcz', 'Gołąbki z baraniną']
    this.dishImageDescription = [DISH_DESCRIPTIONS.DANIEL, DISH_DESCRIPTIONS.BURGER, DISH_DESCRIPTIONS.BORSZCZ, DISH_DESCRIPTIONS.GOLABKI]
  }
}
