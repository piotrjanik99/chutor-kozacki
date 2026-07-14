import {Injectable, inject, signal} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({providedIn: 'root'})
export class ScrollService {
  private router = inject(Router);

  // Flipped on the first section-link click. The home page @defer blocks use
  // it as an extra `when` trigger, so every section renders before we measure
  // where to scroll — otherwise the tiny placeholders above the target expand
  // mid-scroll and push it away.
  readonly sectionsForced = signal(false);

  onAnchorClick(event: Event, sectionId: string): void {
    event.preventDefault();
    this.scrollToSection(sectionId);
  }

  scrollToSection(sectionId: string): void {
    this.sectionsForced.set(true);
    const onHome = this.router.url.split(/[?#]/)[0] === '/';
    if (onHome) {
      this.scrollWhenRendered(sectionId);
    } else {
      this.router.navigateByUrl('/').then(() => this.scrollWhenRendered(sectionId));
    }
  }

  private scrollWhenRendered(sectionId: string): void {
    const deadline = performance.now() + 3000;
    const attempt = () => {
      const el = document.getElementById(sectionId);
      if (!el) {
        // Anchors like #specialDishes live inside a deferred section, so the
        // element only exists once that block has rendered.
        if (performance.now() < deadline) {
          requestAnimationFrame(attempt);
        }
        return;
      }
      el.scrollIntoView({behavior: 'smooth'});
      setTimeout(() => this.correctDrift(sectionId), 700);
    };
    // Two frames so the change detection triggered by sectionsForced has
    // replaced the placeholders before the first measurement.
    requestAnimationFrame(() => requestAnimationFrame(attempt));
  }

  // Late-loading images can still shift the layout while the smooth scroll is
  // running; re-align once it settles if the target drifted.
  private correctDrift(sectionId: string): void {
    const el = document.getElementById(sectionId);
    if (!el) {
      return;
    }
    const scrollPadding = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
    if (Math.abs(el.getBoundingClientRect().top - scrollPadding) > 4) {
      el.scrollIntoView({behavior: 'smooth'});
    }
  }
}
