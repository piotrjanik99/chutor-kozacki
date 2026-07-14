import { Component, inject } from '@angular/core';
import {MenuListItemComponent} from "./menu-list-item/menu-list-item.component";
import {TranslatePipe} from "../../pipes/translate.pipe";
import {LanguageService} from "../../services/language.service";
import {
  appetizers, beer, bourbon, cocktails, coldDrinks,
  desserts, gin,
  hotDrinks,
  hotSnacks,
  kidsMenu, liquors,
  mainCourses,
  sides,
  soups, tequila, vodkaClear, vodkaCraft, wermut, whisky
} from "../../constants/menu.constants";

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [
    MenuListItemComponent,
    TranslatePipe,
  ],
  templateUrl: './menu-list.component.html',
  styleUrl: './menu-list.component.scss'
})
export class MenuListComponent {
  protected languageService = inject(LanguageService);
  protected readonly appetizers = appetizers;
  protected readonly hotSnacks = hotSnacks;
  protected readonly soups = soups;
  protected readonly mainCourses = mainCourses;
  protected readonly desserts = desserts;
  protected readonly kidsMenu = kidsMenu;
  protected readonly sides = sides;
  protected readonly hotDrinks = hotDrinks;
  protected readonly coldDrinks = coldDrinks;
  protected readonly beer = beer;
  protected readonly cocktails = cocktails;
  protected readonly whisky = whisky;
  protected readonly bourbon = bourbon;
  protected readonly gin = gin;
  protected readonly liquors = liquors;
  protected readonly tequila = tequila;
  protected readonly wermut = wermut;
  protected readonly vodkaCraft = vodkaCraft;
  protected readonly vodkaClear = vodkaClear;
}
