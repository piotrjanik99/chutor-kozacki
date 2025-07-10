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
    this.staffImage = ['gallery/szef.jpg']
    this.staffTitle = ['Szef kuchni']
    this.staffImageDescription = [
      'Szef kuchni Jacek Śliwiński posiada ponad 25 letnie doświadczenie kulinarne. W swojej kuchni inspiruje się smakami kresów wschodnich, oraz smakami swojego dzieciństwa w Bieszczadach, przez co dania przez niego przygotowane są unikalne i nietuzinkowe. \n' +
      'Zaczynał swoją przygodę jako kucharz w Grand Hotel Lublinianka, gdzie przez blisko 10 lat przygotowywał potrawy dla gości. Prowadził szereg różnych kuchni jako szef, w różnych lokalizacjach organizując przy tym zarówno małe jak i duże imprezy kulinarne, liczące nawet do 800 osób. \n' +
      'Obecnie zajmuje się prowadzeniem swojej restauracji w hotelu Chutor Kozacki.',]
    this.eventImage = ['gallery/event28main.jpg', 'gallery/event1main.jpeg', 'gallery/event33main.jpg']
    this.eventTitle = ['Wesela', 'Komunie', 'Imprezy okolicznościowe']
    this.eventImageDescription = [
      'W Restauracji Chutor Kozacki możecie spełnić swoje marzenie o bajkowym i wyjątkowym weselu, które będziecie wspominać przez długie lata. Do organizacji każdego przyjęcia weselnego podchodzimy w indywidualny sposób, tak aby marzenia klientów o idealnym weselu stały się rzeczywistością.' +
      'Kompleksowo zorganizujecie u nas przyjęcie weselne do 250 osób w sali z klimatyzacją, w wiejskim zaciszu',

      'Chutor Kozacki oferuje wyjątkową przestrzeń do organizacji tej uroczystości w eleganckiej, ale i ciepłej atmosferze. Stylowe wnętrza nawiązujące do kresowego dziedzictwa, klimatyzowana sala oraz piękne, zielone otoczenie sprawiają, że każda komunia staje się niezapomnianym przeżyciem.\n' +
      'Z nami pierwsza wielka uroczystość Waszego dziecka stanie się prawdziwą przygodą – pełną radości, smaków i niezapomnianych wrażeń!',

      'Restauracja Chutor Kozacki zajmuje się organizacją wszelakich imprez okolicznościowych takich jak przyjęcia urodzinowe, imprezy firmowe czy chrzciny. \n' +
      'Po imprezie można zrelaksować się w otoczeniu przyrody lub przenieść się do naszej przytulnej wiaty grillowej na mniej formalną część spotkania. Chutor Kozacki to idealne miejsce na świętowanie w gronie najbliższych – z klasą, sercem i dbałością o każdy szczegół.']
  }
}
