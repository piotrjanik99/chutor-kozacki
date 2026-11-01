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
  selector: 'app-wigilia',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    SectionHeaderComponent,
    ContactModalComponent,
    TranslatePipe,
  ],
  templateUrl: './wigilia.component.html',
  styleUrl: './wigilia.component.scss'
})
export class WigiliaComponent implements AfterViewInit {
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  private scrollService = inject(ScrollService);
  protected languageService = inject(LanguageService);
  @ViewChild('contactModal') contactModal!: ContactModalComponent;
  @ViewChild('wigiliaTop') wigiliaTop!: ElementRef;

  private content = {
    title: { pl: 'Wigilia firmowa', en: 'Corporate Christmas Eve' },
    description: {
      pl: 'Świąteczne spotkanie w wyjątkowej atmosferze Bieszczadów.',
      en: 'A festive gathering in the unique atmosphere of the Bieszczady Mountains.'
    },
    intro: [
      {
        pl: 'Koniec roku to dobry moment, żeby na chwilę zwolnić, spotkać się przy wspólnym stole i podziękować zespołowi za kolejny rok współpracy.',
        en: "The end of the year is a good moment to slow down for a while, gather around a shared table, and thank your team for another year of cooperation."
      },
      {
        pl: 'Zapraszamy do Restauracji Chutor Kozacki na firmowe spotkania wigilijne, podczas których regionalne smaki, klimatyczne wnętrza i bieszczadzka gościnność tworzą wyjątkową oprawę wspólnego świętowania.',
        en: 'We invite you to Chutor Kozacki Restaurant for corporate Christmas Eve gatherings, where regional flavors, atmospheric interiors, and Bieszczady hospitality create a unique setting for celebrating together.'
      }
    ],
    teamSubheading: { pl: 'Spotkanie dopasowane do Twojego zespołu', en: 'A Gathering Tailored to Your Team' },
    teamParagraphs: [
      {
        pl: 'Kameralna kolacja w gronie najbliższych współpracowników, a może większe spotkanie całej firmy?',
        en: 'An intimate dinner with your closest colleagues, or perhaps a larger gathering for the whole company?'
      },
      {
        pl: 'W Chutorze możemy zaplanować wydarzenie dopasowane do charakteru spotkania, liczby uczestników i oczekiwań organizatora.',
        en: "At Chutor, we can plan an event tailored to the nature of the gathering, the number of participants, and the organizer's expectations."
      }
    ],
    offerGroupTitle: { pl: 'Co możemy zaproponować?', en: 'What Can We Offer?' },
    offerItems: [
      { pl: 'Świąteczne menu przygotowane przez naszą kuchnię.', en: 'A festive menu prepared by our kitchen.' },
      { pl: 'Przestrzeń restauracyjną na spotkanie firmowe.', en: 'A restaurant space for your corporate gathering.' },
      { pl: 'Klimatyczną, świąteczną oprawę.', en: 'An atmospheric, festive setting.' },
      { pl: 'Możliwość połączenia spotkania z pobytem w hotelu.', en: 'The option to combine the gathering with a hotel stay.' },
      { pl: 'Indywidualne ustalenie przebiegu i charakteru wydarzenia.', en: 'An individually arranged course and character of the event.' }
    ],
    offerNote: {
      pl: 'Szczegółowy zakres usług i dostępność ustalamy podczas przygotowania oferty.',
      en: "We determine the detailed scope of services and availability while preparing your offer."
    },
    tasteSubheading: { pl: 'Smaki, które łączą ludzi', en: 'Flavors That Bring People Together' },
    tasteParagraphs: [
      {
        pl: 'Wspólny stół od zawsze był miejscem spotkań i rozmów. W Chutorze szczególną rolę odgrywa kuchnia inspirowana tradycjami regionu i kulinarnym dziedzictwem pogranicza.',
        en: 'A shared table has always been a place for meeting and conversation. At Chutor, a special role is played by cuisine inspired by regional traditions and the culinary heritage of the borderland.'
      },
      {
        pl: 'Nasz Szef Kuchni, Jacek Śliwiński, łączy dobrze znane smaki z własnym podejściem do gotowania, tworząc dania, które mogą stać się ważnym elementem firmowego świętowania.',
        en: 'Our Head Chef, Jacek Śliwiński, combines well-known flavors with his own approach to cooking, creating dishes that can become an important part of your corporate celebration.'
      }
    ],
    planSubheading: { pl: 'Zaplanuj spotkanie świąteczne', en: 'Plan Your Festive Gathering' },
    planParagraphs: [
      {
        pl: 'Powiedz nam, ile osób planuje uczestniczyć w Wigilii firmowej, jaki termin Cię interesuje i jak wyobrażasz sobie to spotkanie.',
        en: "Tell us how many people plan to attend your corporate Christmas Eve, what date you're interested in, and how you picture the gathering."
      },
      {
        pl: 'Przygotujemy propozycję dopasowaną do potrzeb Twojej firmy.',
        en: "We'll prepare a proposal tailored to your company's needs."
      }
    ]
  };

  title = computed(() => this.content.title[this.languageService.lang()]);
  description = computed(() => this.content.description[this.languageService.lang()]);
  intro = computed(() => this.content.intro.map(p => p[this.languageService.lang()]));
  teamSubheading = computed(() => this.content.teamSubheading[this.languageService.lang()]);
  teamParagraphs = computed(() => this.content.teamParagraphs.map(p => p[this.languageService.lang()]));
  offerGroupTitle = computed(() => this.content.offerGroupTitle[this.languageService.lang()]);
  offerItems = computed(() => this.content.offerItems.map(i => i[this.languageService.lang()]));
  offerNote = computed(() => this.content.offerNote[this.languageService.lang()]);
  tasteSubheading = computed(() => this.content.tasteSubheading[this.languageService.lang()]);
  tasteParagraphs = computed(() => this.content.tasteParagraphs.map(p => p[this.languageService.lang()]));
  planSubheading = computed(() => this.content.planSubheading[this.languageService.lang()]);
  planParagraphs = computed(() => this.content.planParagraphs.map(p => p[this.languageService.lang()]));

  constructor() {
    effect(() => {
      const lang = this.languageService.lang();
      const title = this.content.title[lang];
      this.seo.setPageSeo({
        path: '/events/wigilia',
        title: `${title} - Chutor Kozacki`,
        description: this.content.description[lang]
      });
    });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrollService.scrollToTop(this.wigiliaTop.nativeElement);
  }
}
