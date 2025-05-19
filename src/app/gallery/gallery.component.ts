import { AfterViewInit, Component, ElementRef, inject, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    RouterOutlet,
    NgbAccordionModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('galleryTop') galleryTop!: ElementRef;
  @ViewChild('imageModal') imageModal!: TemplateRef<any>;
  modalService = inject(NgbModal);

  dishImages = ['dish1.png', 'dish2.png', 'dish3.png', 'dish4.png'];
  venueImages = ['staff1.png', 'staff2.png', 'staff3.png', 'bg.jpg', 'bg2.jpg'];
  eventImages = ['event1.png', 'event2.png', 'event3.png'];

  currentImage = '';
  currentCategory = '';

  ngAfterViewInit() {
    setTimeout(() => {
      this.galleryTop.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  }

  getPath(image: string): string {
    return `/${image}`;
  }

  openModal(index: number, category: 'dishes' | 'venue' | 'events') {
    this.currentCategory = category;

    switch (category) {
      case 'dishes':
        this.currentImage = this.dishImages[index];
        break;
      case 'venue':
        this.currentImage = this.venueImages[index];
        break;
      case 'events':
        this.currentImage = this.eventImages[index];
        break;
    }

    this.modalService.open(this.imageModal, {
      animation: false,
      size: 'lg',
      centered: true
    });
  }
}
