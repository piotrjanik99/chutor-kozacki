import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID, afterNextRender, effect, signal } from '@angular/core';
import { Lang } from '../models/bilingual.model';

const STORAGE_KEY = 'chutor-kozacki-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  lang = signal<Lang>('pl');

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: Document
  ) {
    // Server always renders the Polish default so the prerendered HTML stays
    // consistent; only after hydration do we check for a stored preference,
    // to avoid a client/server markup mismatch during hydration.
    afterNextRender(() => {
      const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (stored === 'pl' || stored === 'en') {
        this.lang.set(stored);
      }
    });

    effect(() => {
      this.document.documentElement.lang = this.lang();
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(STORAGE_KEY, this.lang());
      }
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  toggleLang(): void {
    this.lang.set(this.lang() === 'pl' ? 'en' : 'pl');
  }
}
