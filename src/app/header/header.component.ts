import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {filter} from "rxjs";
import {NgClass} from "@angular/common";
import {TranslatePipe} from "../pipes/translate.pipe";
import {LanguageService} from "../services/language.service";
import {ScrollService} from "../services/scroll.service";
import {LanguageSwitcherComponent} from "../language-switcher/language-switcher.component";

// Loaded globally from the CDN bundle in index.html.
declare const bootstrap: typeof import('bootstrap');

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    TranslatePipe,
    LanguageSwitcherComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private router = inject(Router)
  protected languageService = inject(LanguageService);
  protected scrollService = inject(ScrollService);
  isPromoPage = signal(false);
  isHomePage = signal(true);

  constructor() {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isPromoPage.set(event.urlAfterRedirects === '/promo');
        this.isHomePage.set(event.urlAfterRedirects === '/');
      });
  }

  onNavListClick(event: Event): void {
    if (!(event.target as HTMLElement).closest('a')) {
      return;
    }
    const nav = document.getElementById('navbarNav');
    if (nav?.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  }
}

