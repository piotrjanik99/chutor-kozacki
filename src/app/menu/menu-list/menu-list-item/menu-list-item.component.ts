import {Component, input} from '@angular/core';
import {Lang} from '../../../models/bilingual.model';
import {MenuItem} from '../../../constants/menu.constants';

@Component({
  selector: 'app-menu-list-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-list-item.component.html',
  styleUrl: './menu-list-item.component.scss'
})
export class MenuListItemComponent {
  item = input.required<MenuItem>();
  lang = input.required<Lang>();

  get title(): string {
    return this.item().title[this.lang()];
  }

  get description(): string {
    return this.item().description[this.lang()];
  }

  get price(): string {
    return this.item().price;
  }
}
