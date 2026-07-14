import { Pipe, PipeTransform } from '@angular/core';
import { Lang } from '../models/bilingual.model';
import { UI_TRANSLATIONS } from '../i18n/ui-translations';

@Pipe({
  name: 'translate',
  standalone: true,
  pure: true
})
export class TranslatePipe implements PipeTransform {
  transform(key: string, lang: Lang): string {
    const entry = UI_TRANSLATIONS[key];
    if (!entry) {
      return key;
    }
    return entry[lang];
  }
}
