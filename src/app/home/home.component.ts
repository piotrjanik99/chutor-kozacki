import {Component, inject, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {CarouselComponent} from "../carousel/carousel.component";
import {ContactComponent} from "../contact/contact.component";
import {MenuComponent} from "../menu/menu.component";
import {FooterComponent} from "../footer/footer.component";
import {SectionHeaderComponent} from "../section-header/section-header.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SeoService} from "../services/seo.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
    SectionHeaderComponent,
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
  @ViewChild('welcomeModal') welcomeModal!: TemplateRef<any>;
  modalService = inject(NgbModal);
  private seo = inject(SeoService);

  constructor() {

  }

  ngOnInit(): void {
    /*setTimeout(() => {
      this.modalService.open(this.welcomeModal, {
        animation: false,
        centered: true
      });
    }, 1000)*/
    this.seo.setPageSeo({
      path: '/',
      title: 'Chutor Kozacki - Restauracja w Bieszczadach | Łukowe',
      description: 'Chutor Kozacki to restauracja w sercu Bieszczad (Łukowe), serwująca kuchnię kresową i regionalną. Organizujemy wesela, komunie i imprezy okolicznościowe do 250 osób.'
    });
    this.seo.setJsonLd('restaurant-jsonld', {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      '@id': 'https://chutor-kozacki-restauracja.pl/',
      name: 'Chutor Kozacki - Restauracja',
      url: 'https://chutor-kozacki-restauracja.pl/',
      image: [
        'https://chutor-kozacki-restauracja.pl/bg2.jpg',
        'https://chutor-kozacki-restauracja.pl/LOGO_BAZA.png'
      ],
      telephone: '+48694870617',
      email: 'kontakt@chutor-kozacki-restauracja.pl',
      priceRange: '$$',
      servesCuisine: ['Kuchnia polska', 'Kuchnia kresowa', 'Kuchnia regionalna'],
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Łukowe 105',
        addressLocality: 'Łukowe',
        postalCode: '38-540',
        addressCountry: 'PL'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '12:00',
          closes: '19:00'
        }
      ],
      sameAs: [
        'https://www.facebook.com/profile.php?id=61559120176701',
        'https://www.instagram.com/chutor_kozacki_restauracja/'
      ],
      menu: 'https://chutor-kozacki-restauracja.pl/#specialDishes'
    });
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
