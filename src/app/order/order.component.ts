import {AfterViewInit, Component, ElementRef, inject, PLATFORM_ID, ViewChild} from '@angular/core';
import {isPlatformBrowser} from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {init, send} from "@emailjs/browser";
import {FooterComponent} from "../footer/footer.component";
import {SectionHeaderComponent} from "../section-header/section-header.component";
import {SeoService} from "../services/seo.service";

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FooterComponent,
    SectionHeaderComponent
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements AfterViewInit{
  quoteForm: FormGroup;
  showOtherEventInput = false;
  @ViewChild('orderTop') orderTop!: ElementRef;
  private seo = inject(SeoService);
  private platformId = inject(PLATFORM_ID);

  constructor(private fb: FormBuilder) {
    this.quoteForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      eventType: ['Wesele', Validators.required],
      otherEventType: [''],
      guestCount: ['', [Validators.required, Validators.min(1)]],
      eventDescription: ['', Validators.required]
    });
    this.seo.setPageSeo({
      path: '/order',
      title: 'Zorganizuj przyjęcie - Chutor Kozacki Restauracja',
      description: 'Zorganizuj wesele, komunię lub inną uroczystość w restauracji Chutor Kozacki w Bieszczadach. Wypełnij formularz i otrzymaj indywidualną wycenę.'
    });
  }

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;
    setTimeout(() => {
      this.orderTop.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }

  onEventTypeChange() {
    this.showOtherEventInput = this.quoteForm.get('eventType')?.value === 'Inna impreza';
    if (!this.showOtherEventInput) {
      this.quoteForm.get('otherEventType')?.setValue('');
    }
  }

  submitQuote() {
    if (this.quoteForm.valid) {
      const formData = {
        email: this.quoteForm.get('email')?.value,
        eventType: this.quoteForm.get('eventType')?.value === 'Inna impreza'
          ? this.quoteForm.get('otherEventType')?.value
          : this.quoteForm.get('eventType')?.value,
        guestCount: this.quoteForm.get('guestCount')?.value,
        eventDescription: this.quoteForm.get('eventDescription')?.value
      };
      init({
        publicKey: "TwJqMzsBv7FlasCQd",
      });
      send('service_w5jmezu', 'template_mim7miq', {
        email: formData.email,
        eventType: formData.eventType,
        guestCount: formData.guestCount,
        eventDescription: formData.eventDescription,
      }).then(() => {
        this.quoteForm.reset()
        alert("Dziękujemy za wiadomość")
      })
    }
  }
}
