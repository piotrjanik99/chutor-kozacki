import { Component } from '@angular/core';
import {MenuListItemComponent} from "./menu-list-item/menu-list-item.component";
import {appetizers, desserts, hotSnacks, kidsMenu, mainCourses, sides, soups} from "../../constants/menu.constants";

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [
    MenuListItemComponent
  ],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
  protected readonly appetizers = appetizers;
  protected readonly hotSnacks = hotSnacks;
  protected readonly soups = soups;
  protected readonly mainCourses = mainCourses;
  protected readonly desserts = desserts;
  protected readonly kidsMenu = kidsMenu;
  protected readonly sides = sides;
}
