import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { LanguageService } from '../services/language.service';
import { Lang } from '../models/bilingual.model';

const HINT_VISIBLE_MS = 5000;
const HINT_FADE_MS = 500;

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSwitcherComponent {
  protected languageService = inject(LanguageService);
  protected showHint = signal(false);
  protected hidingHint = signal(false);

  constructor() {
    const destroyRef = inject(DestroyRef);
    // Browser-only, after hydration — the server-rendered HTML must not
    // contain the hint, or it would flash for users with JS disabled.
    afterNextRender(() => {
      this.showHint.set(true);
      const fadeTimer = setTimeout(() => this.hidingHint.set(true), HINT_VISIBLE_MS - HINT_FADE_MS);
      const hideTimer = setTimeout(() => this.showHint.set(false), HINT_VISIBLE_MS);
      destroyRef.onDestroy(() => {
        clearTimeout(fadeTimer);
        clearTimeout(hideTimer);
      });
    });
  }

  protected selectLang(lang: Lang): void {
    this.languageService.setLang(lang);
    this.showHint.set(false);
  }
}
