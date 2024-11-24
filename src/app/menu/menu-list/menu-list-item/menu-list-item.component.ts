import {Component, input} from '@angular/core';

@Component({
  selector: 'app-menu-list-item',
  standalone: true,
  imports: [],
  templateUrl: './menu-list-item.component.html',
  styleUrl: './menu-list-item.component.scss'
})
export class MenuListItemComponent {
  itemTitle = input('')
  itemDescription = input('');
  itemPrice = input('');
}
