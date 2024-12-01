import { Component } from '@angular/core';
import {MenuListItemComponent} from "./menu-list-item/menu-list-item.component";
import {
  appetizers, bottledBeer, bourbon, brandy, cocktails, coldDrinks,
  desserts, gin,
  hotDrinks,
  hotSnacks,
  kidsMenu, liquors,
  mainCourses, rum,
  sides,
  soups, tapBeer, tequila, vodkaClear, vodkaCraft, wermut, whisky
} from "../../constants/menu.constants";

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
  protected readonly hotDrinks = hotDrinks;
  protected readonly coldDrinks = coldDrinks;
  protected readonly tapBeer = tapBeer;
  protected readonly bottledBeer = bottledBeer;
  protected readonly cocktails = cocktails;
  protected readonly whisky = whisky;
  protected readonly bourbon = bourbon;
  protected readonly brandy = brandy;
  protected readonly rum = rum;
  protected readonly gin = gin;
  protected readonly liquors = liquors;
  protected readonly tequila = tequila;
  protected readonly wermut = wermut;
  protected readonly vodkaCraft = vodkaCraft;
  protected readonly vodkaClear = vodkaClear;
}
