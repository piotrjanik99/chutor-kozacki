import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import {MenuListComponent} from "./menu-list/menu-list.component";
import {DISH_DESCRIPTIONS} from "../constants/dishes.constants";
import {SectionHeaderComponent} from "../section-header/section-header.component";
import {TranslatePipe} from "../pipes/translate.pipe";
import {LanguageService} from "../services/language.service";
import {BilingualText} from "../models/bilingual.model";

const DISH_TITLES: { image: string; title: BilingualText; description: BilingualText }[] = [
  { image: 'dish3.png', title: { pl: 'Borszcz', en: 'Borscht' }, description: DISH_DESCRIPTIONS['BORSZCZ'] },
  { image: 'dish2.png', title: { pl: 'Kozak Burger', en: 'Kozak Burger' }, description: DISH_DESCRIPTIONS['BURGER'] },
  { image: 'dish1.png', title: { pl: 'Pieczeń z daniela', en: 'Roast Fallow Deer' }, description: DISH_DESCRIPTIONS['DANIEL'] },
  { image: 'dish4.png', title: { pl: 'Gołąbki z baraniną', en: 'Lamb Cabbage Rolls' }, description: DISH_DESCRIPTIONS['GOLABKI'] },
];

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CarouselComponent, MenuListComponent, SectionHeaderComponent, TranslatePipe],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent {
  protected languageService = inject(LanguageService);

  dishImage = computed(() => DISH_TITLES.map(d => d.image));
  dishTitle = computed(() => DISH_TITLES.map(d => d.title[this.languageService.lang()]));
  dishImageDescription = computed(() => DISH_TITLES.map(d => d.description[this.languageService.lang()]));
}
