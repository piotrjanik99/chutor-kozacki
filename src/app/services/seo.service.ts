import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

const SITE_URL = 'https://chutor-kozacki-restauracja.pl';
const DEFAULT_IMAGE = `${SITE_URL}/bg2.jpg`;

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  image?: string;
  noindex?: boolean;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(
    private titleService: Title,
    private metaService: Meta,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  setPageSeo(page: PageSeo): void {
    const url = `${SITE_URL}${page.path}`;
    const image = page.image ?? DEFAULT_IMAGE;

    this.titleService.setTitle(page.title);

    this.metaService.updateTag({ name: 'description', content: page.description });
    this.metaService.updateTag({
      name: 'robots',
      content: page.noindex ? 'noindex, follow' : 'index, follow'
    });

    this.metaService.updateTag({ property: 'og:title', content: page.title });
    this.metaService.updateTag({ property: 'og:description', content: page.description });
    this.metaService.updateTag({ property: 'og:url', content: url });
    this.metaService.updateTag({ property: 'og:image', content: image });

    this.metaService.updateTag({ name: 'twitter:title', content: page.title });
    this.metaService.updateTag({ name: 'twitter:description', content: page.description });
    this.metaService.updateTag({ name: 'twitter:image', content: image });

    this.setCanonicalUrl(url);
  }

  private setCanonicalUrl(url: string): void {
    let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
    if (!link) {
      link = this.document.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.document.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }

  setJsonLd(id: string, data: unknown): void {
    const existing = this.document.getElementById(id);
    existing?.remove();

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.text = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
