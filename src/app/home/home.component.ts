import {Component, OnInit} from '@angular/core';
import {CarouselComponent} from "../carousel/carousel.component";
import {ContactComponent} from "../contact/contact.component";
import {MenuComponent} from "../menu/menu.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        CarouselComponent,
        ContactComponent,
        MenuComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  currentYear: number = 0;
  staffImage: string[] = [''];
  staffTitle: string[] = [''];
  staffImageDescription: string[] = [''];
  eventImage: string[] = [''];
  eventTitle: string[] = [''];
  eventImageDescription: string[] = [''];

  constructor() {

  }

  ngOnInit(): void {
    this.currentYear = new Date().getFullYear();
    this.staffImage = ['gallery/staff1.jpeg', 'gallery/staff2.jpeg']
    this.staffTitle = ['Szef kuchni', 'Obsługa']
    this.staffImageDescription = [
      'Szef kuchni wraz z żoną, manager kelnerów oraz kucharze odpowiedzialni za przygotowanie dań. Szef kuchni wraz z żoną, manager kelnerów oraz kucharze odpowiedzialni za przygotowanie dań. Szef kuchni wraz z żoną, manager kelnerów oraz kucharze odpowiedzialni za przygotowanie dań. Szef kuchni wraz z żoną, manager kelnerów oraz kucharze odpowiedzialni za przygotowanie dań.',
      'Obsługa odpowiedzialna za jak najlepsze doświadczenia podczas pobytu.']
    this.eventImage = ['gallery/event28main.jpg', 'gallery/event1main.jpeg', 'gallery/event33main.jpg']
    this.eventTitle = ['Wesela', 'Komunie', 'Imprezy okolicznościowe']
    this.eventImageDescription = [
      'Wesela organizowane w wielu różnych stylach.',
      'Komunie organizowane w klasyczny oraz nowoczesny sposób.',
      'Różne imprezy okolicznościowe jak spotkania przyjaciół, urodziny, sylwester, chrzciny i tym podobne.']
  }
}
