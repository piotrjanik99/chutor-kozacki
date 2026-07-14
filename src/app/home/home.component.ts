import {Component, OnInit, TemplateRef, ViewChild, computed, effect, inject} from '@angular/core';
import {CarouselComponent} from "../carousel/carousel.component";
import {ContactComponent} from "../contact/contact.component";
import {MenuComponent} from "../menu/menu.component";
import {FooterComponent} from "../footer/footer.component";
import {SectionHeaderComponent} from "../section-header/section-header.component";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SeoService} from "../services/seo.service";
import {LanguageService} from "../services/language.service";
import {ScrollService} from "../services/scroll.service";
import {TranslatePipe} from "../pipes/translate.pipe";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselComponent,
    ContactComponent,
    MenuComponent,
    FooterComponent,
    SectionHeaderComponent,
    TranslatePipe,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  currentYear: number = 0;
  @ViewChild('welcomeModal') welcomeModal!: TemplateRef<any>;
  modalService = inject(NgbModal);
  private seo = inject(SeoService);
  protected languageService = inject(LanguageService);
  protected scrollService = inject(ScrollService);

  private staffData = [
    {
      image: 'gallery/szef.jpg',
      title: { pl: 'Szef kuchni', en: 'Head Chef' },
      description: {
        pl: 'Szef kuchni Jacek Śliwiński posiada ponad 25 letnie doświadczenie kulinarne. W swojej kuchni inspiruje się smakami kresów wschodnich, oraz smakami swojego dzieciństwa w Bieszczadach, przez co dania przez niego przygotowane są unikalne i nietuzinkowe. \n' +
          'Zaczynał swoją przygodę jako kucharz w Grand Hotel Lublinianka, gdzie przez blisko 10 lat przygotowywał potrawy dla gości. Prowadził szereg różnych kuchni jako szef, w różnych lokalizacjach organizując przy tym zarówno małe jak i duże imprezy kulinarne, liczące nawet do 800 osób. \n' +
          'Obecnie zajmuje się prowadzeniem swojej restauracji w hotelu Chutor Kozacki.',
        en: 'Head Chef Jacek Śliwiński has more than 25 years of culinary experience. His cooking draws on the flavors of the Eastern Borderlands (Kresy) as well as the tastes of his childhood in the Bieszczady Mountains, resulting in dishes that are unique and out of the ordinary. \n' +
          'He began his career as a cook at the Grand Hotel Lublinianka, where he prepared meals for guests for nearly 10 years. He has led a number of different kitchens as head chef, in various locations, organizing both small and large culinary events for up to 800 people. \n' +
          'Today he runs his own restaurant at the Chutor Kozacki hotel.'
      }
    }
  ];

  private eventData = [
    {
      image: 'gallery/event28main.jpg',
      title: { pl: 'Wesela', en: 'Weddings' },
      description: {
        pl: 'W Restauracji Chutor Kozacki możecie spełnić swoje marzenie o bajkowym i wyjątkowym weselu, które będziecie wspominać przez długie lata. Do organizacji każdego przyjęcia weselnego podchodzimy w indywidualny sposób, tak aby marzenia klientów o idealnym weselu stały się rzeczywistością.' +
          'Kompleksowo zorganizujecie u nas przyjęcie weselne do 250 osób w sali z klimatyzacją, w wiejskim zaciszu',
        en: "At Chutor Kozacki Restaurant you can make your dream of a fairy-tale, one-of-a-kind wedding come true — a day you'll remember for years to come. We approach every wedding individually, so that our clients' vision of the perfect wedding becomes reality. " +
          "We can fully organize a wedding reception for up to 250 guests in our air-conditioned hall, tucked away in a quiet countryside setting."
      }
    },
    {
      image: 'gallery/event1main.jpeg',
      title: { pl: 'Komunie', en: 'Communions' },
      description: {
        pl: 'Chutor Kozacki oferuje wyjątkową przestrzeń do organizacji tej uroczystości w eleganckiej, ale i ciepłej atmosferze. Stylowe wnętrza nawiązujące do kresowego dziedzictwa, klimatyzowana sala oraz piękne, zielone otoczenie sprawiają, że każda komunia staje się niezapomnianym przeżyciem.\n' +
          'Z nami pierwsza wielka uroczystość Waszego dziecka stanie się prawdziwą przygodą – pełną radości, smaków i niezapomnianych wrażeń!',
        en: 'Chutor Kozacki offers a unique space to celebrate this occasion in an elegant yet warm atmosphere. Stylish interiors inspired by Kresy heritage, an air-conditioned hall, and beautiful green surroundings make every communion an unforgettable experience. \n' +
          "With us, your child's first big celebration will become a true adventure — full of joy, flavor, and lasting memories!"
      }
    },
    {
      image: 'gallery/event33main.jpg',
      title: { pl: 'Imprezy okolicznościowe', en: 'Special Events' },
      description: {
        pl: 'Restauracja Chutor Kozacki zajmuje się organizacją wszelakich imprez okolicznościowych takich jak przyjęcia urodzinowe, imprezy firmowe czy chrzciny. \n' +
          'Po imprezie można zrelaksować się w otoczeniu przyrody lub przenieść się do naszej przytulnej wiaty grillowej na mniej formalną część spotkania. Chutor Kozacki to idealne miejsce na świętowanie w gronie najbliższych – z klasą, sercem i dbałością o każdy szczegół.',
        en: 'Chutor Kozacki Restaurant organizes all kinds of special events, such as birthday parties, corporate events, or christenings. \n' +
          'After the event, you can relax surrounded by nature or move to our cozy grill shelter for a more informal part of the gathering. Chutor Kozacki is the perfect place to celebrate with your loved ones — with style, heart, and attention to every detail.'
      }
    }
  ];

  staffImage = computed(() => this.staffData.map(d => d.image));
  staffTitle = computed(() => this.staffData.map(d => d.title[this.languageService.lang()]));
  staffImageDescription = computed(() => this.staffData.map(d => d.description[this.languageService.lang()]));

  eventImage = computed(() => this.eventData.map(d => d.image));
  eventTitle = computed(() => this.eventData.map(d => d.title[this.languageService.lang()]));
  eventImageDescription = computed(() => this.eventData.map(d => d.description[this.languageService.lang()]));

  constructor() {
    effect(() => {
      const lang = this.languageService.lang();
      this.seo.setPageSeo({
        path: '/',
        title: lang === 'pl'
          ? 'Chutor Kozacki - Restauracja w Bieszczadach | Łukowe'
          : 'Chutor Kozacki - Restaurant in the Bieszczady Mountains | Łukowe',
        description: lang === 'pl'
          ? 'Chutor Kozacki to restauracja w sercu Bieszczad (Łukowe), serwująca kuchnię kresową i regionalną. Organizujemy wesela, komunie i imprezy okolicznościowe do 250 osób.'
          : 'Chutor Kozacki is a restaurant in the heart of the Bieszczady Mountains (Łukowe), serving Kresy and regional cuisine. We organize weddings, communions, and special events for up to 250 guests.'
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
        servesCuisine: lang === 'pl'
          ? ['Kuchnia polska', 'Kuchnia kresowa', 'Kuchnia regionalna']
          : ['Polish cuisine', 'Kresy (Eastern Borderlands) cuisine', 'Regional cuisine'],
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
    });
  }

  ngOnInit(): void {
    /*setTimeout(() => {
      this.modalService.open(this.welcomeModal, {
        animation: false,
        centered: true
      });
    }, 1000)*/
    this.currentYear = new Date().getFullYear();
  }
}
