import {ChangeDetectionStrategy, Component, inject, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {init, send} from "@emailjs/browser";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent {
  mail: string = 'sliwjac@gmail.com'
  modalService = inject(NgbModal);
  fb = inject(FormBuilder);
  @ViewChild('contactModal') contactModal!: TemplateRef<any>;

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

  openContact() {
    this.modalService.open(this.contactModal, {
      animation: false,
      size: 'lg',
      centered: true
    });
  }

  sendMail() {
    init({
      publicKey: "TwJqMzsBv7FlasCQd",
    });
    send('service_j1kfk0l', 'template_7hc583d', {
      name: this.contactForm.value.name,
      email: this.contactForm.value.email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message
    }).then(() => {
      this.name?.reset()
      this.email?.reset()
      this.subject?.reset()
      this.message?.reset()
      this.modalService.dismissAll()
      alert("Dziękujemy za wiadomość")
    })
  }

}
