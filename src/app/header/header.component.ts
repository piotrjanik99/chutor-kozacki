import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from "@angular/router";
import {filter} from "rxjs";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  private router = inject(Router)
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
}

