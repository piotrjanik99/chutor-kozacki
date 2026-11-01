import {AfterViewInit, Component, ElementRef, PLATFORM_ID, ViewChild, computed, effect, inject} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {RouterLink} from '@angular/router';
import {FooterComponent} from "../footer/footer.component";
import {SectionHeaderComponent} from "../section-header/section-header.component";
import {SeoService} from "../services/seo.service";
import {TranslatePipe} from "../pipes/translate.pipe";
import {LanguageService} from "../services/language.service";
import {ScrollService} from "../services/scroll.service";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    SectionHeaderComponent,
    TranslatePipe,
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements AfterViewInit {
  @ViewChild('eventsTop') eventsTop!: ElementRef;
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);
  private scrollService = inject(ScrollService);
  protected languageService = inject(LanguageService);

  private upcomingEventsData = [
    {
      image: '/events/Andrzejki.jpg',
      link: '/events/andrzejki',
      title: { pl: 'Andrzejki w Chutorze', en: "St. Andrew's Night at Chutor" },
      meta: { pl: '21 listopada | godz. 19:00', en: 'November 21 | 7:00 PM' },
      description: { pl: 'Kolacja i zabawa do białego rana', en: 'Dinner and dancing till dawn' }
    },
    {
      image: '/events/Sylwester.jpg',
      link: '/events/sylwester',
      title: { pl: 'Sylwester 2026/2027', en: "New Year's Eve 2026/2027" },
      meta: { pl: '31 grudnia | Bal sylwestrowy', en: "December 31 | New Year's Eve Ball" },
      description: { pl: 'Wyjątkowa noc z możliwością noclegu', en: 'An extraordinary night with the option to stay overnight' }
    }
  ];

  events = computed(() => this.upcomingEventsData.map(d => ({
    image: d.image,
    link: d.link,
    title: d.title[this.languageService.lang()],
    meta: d.meta[this.languageService.lang()],
    description: d.description[this.languageService.lang()]
  })));

  private celebrationsData = [
    {
      image: '/gallery/event28main.jpg',
      title: { pl: 'Wesela', en: 'Weddings' },
      description: { pl: 'Wyjątkowe przyjęcia w bieszczadzkim klimacie', en: 'Unique receptions in the Bieszczady atmosphere' }
    },
    {
      image: '/gallery/event1main.jpeg',
      title: { pl: 'Komunie', en: 'Communions' },
      description: { pl: 'Rodzinne świętowanie w Chutorze', en: 'Family celebrations at Chutor' }
    },
    {
      image: '/gallery/event33main.jpg',
      title: { pl: 'Uroczystości', en: 'Celebrations' },
      description: { pl: 'Urodziny, jubileusze, chrzciny', en: 'Birthdays, anniversaries, christenings' }
    }
  ];

  celebrations = computed(() => this.celebrationsData.map(d => ({
    image: d.image,
    title: d.title[this.languageService.lang()],
    description: d.description[this.languageService.lang()]
  })));

  private whyReasonsData = [
    {
      image: '/events/Kuchnia_menu.jpg',
      description: { pl: 'Kuchnia i menu dopasowane do okazji', en: 'Cuisine and menu tailored to the occasion' }
    },
    {
      image: '/events/Przygotowanie.jpg',
      description: { pl: 'Przygotowanie i oprawa przyjęcia', en: 'Preparation and styling of the celebration' }
    },
    {
      image: '/events/Bieszczadzki_klimat.jpg',
      description: { pl: 'Bieszczadzki klimat i gościnność', en: 'Bieszczady atmosphere and hospitality' }
    }
  ];

  whyReasons = computed(() => this.whyReasonsData.map(d => ({
    image: d.image,
    description: d.description[this.languageService.lang()]
  })));

  constructor() {
    effect(() => {
      const lang = this.languageService.lang();
      this.seo.setPageSeo({
        path: '/events',
        title: lang === 'pl'
          ? 'Najbliższe wydarzenia - Chutor Kozacki Restauracja'
          : 'Upcoming Events - Chutor Kozacki Restaurant',
        description: lang === 'pl'
          ? 'Sprawdź nadchodzące wydarzenia w restauracji Chutor Kozacki w Bieszczadach: Andrzejki oraz Sylwester 2026/2027.'
          : "Check out upcoming events at Chutor Kozacki restaurant in the Bieszczady Mountains: St. Andrew's Night and New Year's Eve 2026/2027."
      });
    });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.scrollService.scrollToTop(this.eventsTop.nativeElement);
  }
}
