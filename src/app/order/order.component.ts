import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements AfterViewInit{
  quoteForm: FormGroup;
  showOtherEventInput = false;
  @ViewChild('orderTop') orderTop!: ElementRef;

  constructor(private fb: FormBuilder) {
    this.quoteForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      eventType: ['Wesele', Validators.required],
      otherEventType: [''],
      guestCount: ['', [Validators.required, Validators.min(1)]],
      eventDescription: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
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

      console.log('Form data to be sent:', formData);
      // Here you can handle the form submission (e.g., send to service)
      // The data is structured as:
      // {
      //   email: string,
      //   eventType: string (either the selected option or custom text),
      //   guestCount: number,
      //   eventDescription: string
      // }
    }
  }
}
