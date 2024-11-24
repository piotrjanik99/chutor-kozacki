import { Component } from '@angular/core';
import {MenuListItemComponent} from "./menu-list-item/menu-list-item.component";

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
  menuItems = [
    {
      title: 'Spaghetti Bolognese',
      description: 'Classic Italian pasta dish with rich tomato sauce.',
      price: '12.99'
    },
    {
      title: 'Chicken Curry',
      description: 'Spicy and creamy curry with tender chicken pieces.',
      price: '10.99'
    },
    {
      title: 'Caesar Salad',
      description: 'Fresh lettuce with Caesar dressing, croutons, and parmesan.',
      price: '8.99'
    },
    {
      title: 'Caesar Salad',
      description: 'Fresh lettuce with Caesar dressing, croutons, and parmesan.',
      price: '8.99'
    },
    {
      title: 'Caesar Salad',
      description: 'Fresh lettuce with Caesar dressing, croutons, and parmesan.',
      price: '8.99'
    },
    {
      title: 'Caesar Salad',
      description: 'Fresh lettuce with Caesar dressing, croutons, and parmesan.',
      price: '8.99'
    },
    {
      title: 'Caesar Salad',
      description: 'Fresh lettuce with Caesar dressing, croutons, and parmesan.',
      price: '8.99'
    },
  ];

  splitIntoColumns(items: any[], columns: number): any[][] {
    const result: any[][] = Array.from({ length: columns }, () => []);
    items.forEach((item, index) => {
      result[index % columns].push(item);
    });
    return result;
  }
}
