import {ChangeDetectionStrategy, Component, inject, ViewChild} from '@angular/core';
import {TranslatePipe} from "../pipes/translate.pipe";
import {LanguageService} from "../services/language.service";
import {ContactModalComponent} from "../contact-modal/contact-modal.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    TranslatePipe,
    ContactModalComponent,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  mail: string = 'kontakt@chutor-kozacki-restauracja.pl'
  protected languageService = inject(LanguageService);
  @ViewChild('contactModal') contactModal!: ContactModalComponent;

  openContact() {
    this.contactModal.open();
  }
}
