import { Component, inject } from '@angular/core';
import { SeoService } from '../services/seo.service';

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

  constructor() {
    this.seo.setPageSeo({
      path: '/promo',
      title: 'Kod rabatowy - Chutor Kozacki Restauracja',
      description: 'Twój kod rabatowy na usługi restauracji Chutor Kozacki.',
      noindex: true
    });
  }
}
