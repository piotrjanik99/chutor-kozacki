import { Component, inject } from '@angular/core';
import {RouterLink} from "@angular/router";
import {TranslatePipe} from "../pipes/translate.pipe";
import {LanguageService} from "../services/language.service";
import {ScrollService} from "../services/scroll.service";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    TranslatePipe,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  protected languageService = inject(LanguageService);
  protected scrollService = inject(ScrollService);
}
