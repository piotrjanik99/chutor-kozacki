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
  selector: 'app-andrzejki',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    SectionHeaderComponent,
    ContactModalComponent,
    TranslatePipe,
  ],
  templateUrl: './andrzejki.component.html',
  styleUrl: './andrzejki.component.scss'
})
export class AndrzejkiComponent implements AfterViewInit {
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  private scrollService = inject(ScrollService);
  protected languageService = inject(LanguageService);
  @ViewChild('contactModal') contactModal!: ContactModalComponent;
  @ViewChild('andrzejkiTop') andrzejkiTop!: ElementRef;

  private content = {
    title: { pl: 'Andrzejki w Chutorze', en: "St. Andrew's Night at Chutor" },
    subtitle: { pl: 'Co wywróży ta noc?', en: 'What will this night foretell?' },
    quickFacts: { pl: '21 listopada | 19:00 | 390 zł/para', en: 'November 21 | 7:00 PM | 390 PLN/couple' },
    intro: [
      {
        pl: 'Andrzejkowe wróżby, muzyka na żywo, dobre jedzenie i zabawa do białego rana. Tak zapowiada się wieczór w Chutorze Kozackim!',
        en: "Fortune-telling, live music, great food, and dancing until dawn. That's how the evening at Chutor Kozacki is shaping up!"
      },
      {
        pl: 'Zapraszamy do wspólnego świętowania przy suto zastawionych stołach i na parkiecie. O kulinarną stronę wieczoru zadba nasza kuchnia, a o muzykę – zespół EFEKT.',
        en: 'Join us to celebrate together at bountifully set tables and on the dance floor. Our kitchen will take care of the culinary side of the evening, and the band EFEKT will take care of the music.'
      }
    ],
    tableGroupTitle: { pl: 'Na stole', en: 'On the Table' },
    tableItems: [
      { pl: 'Powitanie regionalnym trunkiem.', en: 'A welcome drink — a regional spirit.' },
      { pl: 'Uroczysta kolacja.', en: 'A festive dinner.' },
      { pl: 'Ciepłe dania serwowane podczas zabawy.', en: 'Hot dishes served throughout the party.' },
      { pl: 'Bufet zimnych przekąsek.', en: 'A cold appetizer buffet.' },
      { pl: 'Słodki stół.', en: 'A dessert table.' },
      { pl: 'Woda, soki, kawa i herbata bez limitu.', en: 'Unlimited water, juice, coffee, and tea.' }
    ],
    musicGroupTitle: { pl: 'Muzyka i atrakcje', en: 'Music & Entertainment' },
    musicItems: [
      { pl: 'Muzyka na żywo – zespół EFEKT.', en: 'Live music by the band EFEKT.' },
      { pl: 'Andrzejkowe wróżby i zabawy.', en: "St. Andrew's Night fortune-telling and games." },
      { pl: 'Fotobudka i ścianka do zdjęć.', en: 'A photo booth and photo wall.' }
    ],
    additionalInfo: {
      pl: 'Podczas zabawy dostępny będzie bar koktajlowy z dodatkowo płatnymi drinkami. Goście mogą również przynieść własny alkohol.',
      en: 'During the party, a cocktail bar with paid drinks will be available. Guests may also bring their own alcohol.'
    },
    price: { pl: '390 zł/para', en: '390 PLN/couple' }
  };

  title = computed(() => this.content.title[this.languageService.lang()]);
  subtitle = computed(() => this.content.subtitle[this.languageService.lang()]);
  quickFacts = computed(() => this.content.quickFacts[this.languageService.lang()]);
  intro = computed(() => this.content.intro.map(p => p[this.languageService.lang()]));
  tableGroupTitle = computed(() => this.content.tableGroupTitle[this.languageService.lang()]);
  tableItems = computed(() => this.content.tableItems.map(i => i[this.languageService.lang()]));
  musicGroupTitle = computed(() => this.content.musicGroupTitle[this.languageService.lang()]);
  musicItems = computed(() => this.content.musicItems.map(i => i[this.languageService.lang()]));
  additionalInfo = computed(() => this.content.additionalInfo[this.languageService.lang()]);
  price = computed(() => this.content.price[this.languageService.lang()]);

  constructor() {
    effect(() => {
      const lang = this.languageService.lang();
      const title = this.content.title[lang];
      this.seo.setPageSeo({
        path: '/events/andrzejki',
        title: `${title} - Chutor Kozacki`,
        description: this.content.intro[0][lang]
      });
    });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrollService.scrollToTop(this.andrzejkiTop.nativeElement);
  }
}
