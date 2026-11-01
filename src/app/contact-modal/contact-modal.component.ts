import {Component, TemplateRef, ViewChild, inject} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {init, send} from "@emailjs/browser";
import {TranslatePipe} from "../pipes/translate.pipe";
import {LanguageService} from "../services/language.service";
import {UI_TRANSLATIONS} from "../i18n/ui-translations";

@Component({
  selector: 'app-contact-modal',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    TranslatePipe,
  ],
  templateUrl: './contact-modal.component.html',
  styleUrl: './contact-modal.component.scss'
})
export class ContactModalComponent {
  private modalService = inject(NgbModal);
  private fb = inject(FormBuilder);
  protected languageService = inject(LanguageService);
  @ViewChild('contactModal') private contactModalTpl!: TemplateRef<any>;

  contactForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.minLength(5)]],
    subject: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  get name() { return this.contactForm.get('name'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }
  get email() { return this.contactForm.get('email'); }

  open(): void {
    this.modalService.open(this.contactModalTpl, {
      animation: false,
      size: 'lg',
      centered: true
    });
  }

  sendMail(): void {
    init({
      publicKey: "TwJqMzsBv7FlasCQd",
    });
    send('service_w5jmezu', 'template_7hc583d', {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    }).then(() => {
      this.contactForm.reset();
      this.modalService.dismissAll();
      alert(UI_TRANSLATIONS['contact.thankYou'][this.languageService.lang()]);
    });
  }
}
