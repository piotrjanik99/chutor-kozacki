import {Component, OnInit, TemplateRef, ViewChild, computed, effect, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
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
    RouterLink,
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
          'Obecnie zajmuje się prowadzeniem swojej restauracji w Chutorze Kozackim.',
        en: 'Head Chef Jacek Śliwiński has more than 25 years of culinary experience. His cooking draws on the flavors of the Eastern Borderlands (Kresy) as well as the tastes of his childhood in the Bieszczady Mountains, resulting in dishes that are unique and out of the ordinary. \n' +
          'He began his career as a cook at the Grand Hotel Lublinianka, where he prepared meals for guests for nearly 10 years. He has led a number of different kitchens as head chef, in various locations, organizing both small and large culinary events for up to 800 people. \n' +
          'Today he runs his own restaurant at Chutor Kozacki.'
      }
    }
  ];

  private upcomingEventsData = [
    {
      image: '/Wigilie firmowe.jpg',
      link: '/events/wigilia',
      badge: { pl: 'Dla firm', en: 'For Businesses' },
      title: { pl: 'Wigilia firmowa', en: 'Corporate Christmas Eve' },
      description: { pl: 'Świąteczne spotkanie zespołu', en: "A festive team Christmas Eve gathering" }
    },
    {
      image: '/Andrzejki.jpg',
      link: '/events/andrzejki',
      badge: { pl: 'Najbliższe', en: 'Upcoming' },
      title: { pl: 'Andrzejki w Chutorze', en: "St. Andrew's Night at Chutor" },
      description: { pl: 'Co ta noc wywróży?', en: 'What will this night foretell?' }
    },
    {
      image: '/Sylwester.jpg',
      link: '/events/sylwester',
      badge: { pl: 'Oferta specjalna', en: 'Special Offer' },
      title: { pl: 'Sylwester 2026/2027', en: 'New Year\'s Eve 2026/2027' },
      description: { pl: 'Wyjątkowy bal sylwestrowy!', en: 'An extraordinary New Year\'s Eve ball!' }
    }
  ];

  staffImage = computed(() => this.staffData.map(d => d.image));
  staffTitle = computed(() => this.staffData.map(d => d.title[this.languageService.lang()]));
  staffImageDescription = computed(() => this.staffData.map(d => d.description[this.languageService.lang()]));

  upcomingEvents = computed(() => this.upcomingEventsData.map(d => ({
    image: d.image,
    link: d.link,
    badge: d.badge[this.languageService.lang()],
    title: d.title[this.languageService.lang()],
    description: d.description[this.languageService.lang()]
  })));

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
