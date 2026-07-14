import { Component, effect, inject } from '@angular/core';
import { SeoService } from '../services/seo.service';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-promo',
  standalone: true,
  imports: [
  ],
  templateUrl: './promo.component.html',
  styleUrl: './promo.component.scss'
})
export class PromoComponent {
  private seo = inject(SeoService);
  protected languageService = inject(LanguageService);

  constructor() {
    effect(() => {
      const lang = this.languageService.lang();
      this.seo.setPageSeo({
        path: '/promo',
        title: lang === 'pl'
          ? 'Kod rabatowy - Chutor Kozacki Restauracja'
          : 'Discount Code - Chutor Kozacki Restaurant',
        description: lang === 'pl'
          ? 'Twój kod rabatowy na usługi restauracji Chutor Kozacki.'
          : 'Your discount code for services at Chutor Kozacki restaurant.',
        noindex: true
      });
    });
  }
}
