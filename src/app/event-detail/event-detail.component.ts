import {Component, computed, effect, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FooterComponent} from "../footer/footer.component";
import {SectionHeaderComponent} from "../section-header/section-header.component";
import {SeoService} from "../services/seo.service";
import {TranslatePipe} from "../pipes/translate.pipe";
import {LanguageService} from "../services/language.service";
import {UI_TRANSLATIONS} from "../i18n/ui-translations";

export type EventKey = 'wigilia' | 'andrzejki' | 'sylwester';

const EVENT_TITLE_KEYS: Record<EventKey, string> = {
  wigilia: 'eventDetail.wigiliaTitle',
  andrzejki: 'eventDetail.andrzejkiTitle',
  sylwester: 'eventDetail.sylwesterTitle'
};

@Component({
  selector: 'app-event-detail',
  standalone: true,
  imports: [
    FooterComponent,
    SectionHeaderComponent,
    TranslatePipe,
  ],
  templateUrl: './event-detail.component.html',
  styleUrl: './event-detail.component.scss'
})
export class EventDetailComponent {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);
  protected languageService = inject(LanguageService);

  private eventKey = this.route.snapshot.data['eventKey'] as EventKey;

  title = computed(() => UI_TRANSLATIONS[EVENT_TITLE_KEYS[this.eventKey]][this.languageService.lang()]);

  constructor() {
    effect(() => {
      const lang = this.languageService.lang();
      const title = UI_TRANSLATIONS[EVENT_TITLE_KEYS[this.eventKey]][lang];
      this.seo.setPageSeo({
        path: `/events/${this.eventKey}`,
        title: `${title} - Chutor Kozacki`,
        description: title,
        noindex: true
      });
    });
  }
}
