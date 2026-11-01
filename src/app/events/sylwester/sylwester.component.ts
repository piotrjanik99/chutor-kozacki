import {AfterViewInit, Component, ElementRef, PLATFORM_ID, ViewChild, computed, effect, inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FooterComponent} from "../../footer/footer.component";
import {SectionHeaderComponent} from "../../section-header/section-header.component";
import {ContactModalComponent} from "../../contact-modal/contact-modal.component";
import {SeoService} from "../../services/seo.service";
import {TranslatePipe} from "../../pipes/translate.pipe";
import {LanguageService} from "../../services/language.service";
import {ScrollService} from "../../services/scroll.service";

@Component({
  selector: 'app-sylwester',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    SectionHeaderComponent,
    ContactModalComponent,
    TranslatePipe,
  ],
  templateUrl: './sylwester.component.html',
  styleUrl: './sylwester.component.scss'
})
export class SylwesterComponent implements AfterViewInit {
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  private scrollService = inject(ScrollService);
  protected languageService = inject(LanguageService);
  @ViewChild('contactModal') contactModal!: ContactModalComponent;
  @ViewChild('sylwesterTop') sylwesterTop!: ElementRef;

  private content = {
    title: { pl: 'Sylwester 2026/2027', en: "New Year's Eve 2026/2027" },
    description: { pl: 'Pożegnaj stary rok w bieszczadzkim klimacie!', en: 'Say goodbye to the old year in the Bieszczady atmosphere!' },
    variants: [
      {
        price: { pl: '435 zł/osoba', en: '435 PLN/person' },
        title: { pl: 'Bal sylwestrowy', en: "New Year's Eve Ball" },
        note: { pl: 'cena promocyjna do 20.11', en: 'promotional price until Nov 20' }
      },
      {
        price: { pl: '660 zł/osoba', en: '660 PLN/person' },
        title: { pl: 'Bal + 1 doba noclegowa', en: "Ball + 1 night's stay" },
        note: null
      }
    ],
    intro: [
      {
        pl: 'Ostatnia noc roku to dobry powód, żeby spotkać się przy wspólnym stole, wznieść toast i dać się porwać zabawie.',
        en: 'The last night of the year is a good reason to gather at a shared table, raise a toast, and let yourself be swept up in the celebration.'
      },
      {
        pl: 'W Chutorze przygotowujemy sylwestrowy bal z uroczystą kolacją, bufetami pełnymi smaków i atrakcjami, które umilą oczekiwanie na północ. A jeśli nie chcesz wracać do domu zaraz po zabawie, możesz wybrać ofertę z noclegiem.',
        en: "At Chutor, we're preparing a New Year's Eve ball with a festive dinner, buffets full of flavor, and entertainment to make the wait for midnight fly by. And if you don't want to go home right after the party, you can choose the option with an overnight stay."
      }
    ],
    offerDetailsSubheading: { pl: 'Co przygotowaliśmy na tę noc?', en: 'What have we prepared for this night?' },
    menuGroupTitle: { pl: 'Menu sylwestrowe', en: "New Year's Eve Menu" },
    menuItems: [
      { pl: 'Uroczysta kolacja dwudaniowa z deserem.', en: 'A festive two-course dinner with dessert.' },
      { pl: 'Bufet dań ciepłych.', en: 'A hot dish buffet.' },
      { pl: 'Bufet zimnych przystawek.', en: 'A cold appetizer buffet.' },
      { pl: 'Bufet słodkości.', en: 'A dessert buffet.' },
      { pl: 'Dwa drinki dla każdej osoby.', en: 'Two drinks per person.' },
      { pl: 'Lampka szampana o północy.', en: 'A glass of champagne at midnight.' }
    ],
    attractionsGroupTitle: { pl: 'Atrakcje', en: 'Entertainment' },
    attractionsItems: [
      { pl: 'Pokaz fajerwerków.', en: 'A fireworks show.' },
      { pl: 'Fotobudka.', en: 'A photo booth.' }
    ],
    kidsSubheading: { pl: 'Sylwester dla najmłodszych', en: 'New Year\'s Eve for the Youngest Guests' },
    kidsPrice: { pl: 'KINDER BAL – 190 zł / dziecko', en: "KIDS' BALL – 190 PLN / child" },
    kidsDescription: {
      pl: 'Dzieci będą świętować w osobnej przestrzeni, pod opieką animatorki. W tym czasie rodzice mogą korzystać z atrakcji balu sylwestrowego.',
      en: "Children will celebrate in a separate space, supervised by an entertainer. Meanwhile, parents can enjoy the New Year's Eve ball's entertainment."
    },
    additionalInfo: {
      pl: 'Na miejscu dostępny będzie bar koktajlowy z dodatkowo płatnymi drinkami. Istnieje także możliwość wniesienia własnego alkoholu.',
      en: 'A cocktail bar with paid drinks will be available on site. It is also possible to bring your own alcohol.'
    },
    reservationText: {
      pl: 'Wybierz wariant oferty i skontaktuj się z nami, aby sprawdzić dostępność miejsc',
      en: 'Choose your offer variant and contact us to check availability'
    }
  };

  title = computed(() => this.content.title[this.languageService.lang()]);
  description = computed(() => this.content.description[this.languageService.lang()]);
  variants = computed(() => this.content.variants.map(v => ({
    price: v.price[this.languageService.lang()],
    title: v.title[this.languageService.lang()],
    note: v.note ? v.note[this.languageService.lang()] : null
  })));
  intro = computed(() => this.content.intro.map(p => p[this.languageService.lang()]));
  offerDetailsSubheading = computed(() => this.content.offerDetailsSubheading[this.languageService.lang()]);
  menuGroupTitle = computed(() => this.content.menuGroupTitle[this.languageService.lang()]);
  menuItems = computed(() => this.content.menuItems.map(i => i[this.languageService.lang()]));
  attractionsGroupTitle = computed(() => this.content.attractionsGroupTitle[this.languageService.lang()]);
  attractionsItems = computed(() => this.content.attractionsItems.map(i => i[this.languageService.lang()]));
  kidsSubheading = computed(() => this.content.kidsSubheading[this.languageService.lang()]);
  kidsPrice = computed(() => this.content.kidsPrice[this.languageService.lang()]);
  kidsDescription = computed(() => this.content.kidsDescription[this.languageService.lang()]);
  additionalInfo = computed(() => this.content.additionalInfo[this.languageService.lang()]);
  reservationText = computed(() => this.content.reservationText[this.languageService.lang()]);

  constructor() {
    effect(() => {
      const lang = this.languageService.lang();
      const title = this.content.title[lang];
      this.seo.setPageSeo({
        path: '/events/sylwester',
        title: `${title} - Chutor Kozacki`,
        description: this.content.description[lang]
      });
    });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrollService.scrollToTop(this.sylwesterTop.nativeElement);
  }
}
