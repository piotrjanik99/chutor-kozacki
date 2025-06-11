import {Component, OnInit} from '@angular/core';
import {CarouselComponent} from "../carousel/carousel.component";
import {ContactComponent} from "../contact/contact.component";
import {MenuComponent} from "../menu/menu.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        CarouselComponent,
        ContactComponent,
        MenuComponent,
        FooterComponent
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
    this.staffImage = ['gallery/szef.jpg','gallery/staff1.jpeg', 'gallery/staff2.jpeg']
    this.staffTitle = ['Szef kuchni','Ekipa zarządzająca', 'Obsługa']
    this.staffImageDescription = [
      'Szef kuchni podczas pokazu kulinarnego na jednym z naszych wydarzeń.',
      'Szef kuchni wraz z żoną, manager kelnerów oraz kucharze odpowiedzialni za przygotowanie dań.',
      'Obsługa odpowiedzialna za jak najlepsze doświadczenia podczas pobytu.']
    this.eventImage = ['gallery/event28main.jpg', 'gallery/event1main.jpeg', 'gallery/event33main.jpg']
    this.eventTitle = ['Wesela', 'Komunie', 'Imprezy okolicznościowe']
    this.eventImageDescription = [
      'Wesela organizowane w wielu różnych stylach.',
      'Komunie organizowane w klasyczny oraz nowoczesny sposób.',
      'Różne imprezy okolicznościowe jak spotkania przyjaciół, urodziny, sylwester, chrzciny i tym podobne.']
  }
}
