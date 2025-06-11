import { AfterViewInit, Component, ElementRef, inject, TemplateRef, ViewChild } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
    imports: [
        RouterOutlet,
        FooterComponent,
    ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('galleryTop') galleryTop!: ElementRef;
  @ViewChild('imageModal') imageModal!: TemplateRef<any>;
  modalService = inject(NgbModal);

  dishImages = [
    'dish1.png',
    'dish2.png',
    'dish3.png',
    'dish4.png',
    'gallery/dish1.jpeg',
    'gallery/dish2.jpeg',
    'gallery/dish4.jpeg',
    'gallery/dish5.jpeg',
    'gallery/dish6.jpeg',
    'gallery/dish7.jpg',
    'gallery/dish8.jpg',
    'gallery/dish9.jpg',
    'gallery/dish10.jpg'];
  venueImages = [
    'gallery/venue16.jpg',
    'gallery/venue17.jpg',
    'gallery/venue18.jpg',
    'gallery/venue19.jpg',
    'gallery/venue20.jpg',
    'gallery/venue21.jpg',
    'gallery/venue3.jpeg',
    'gallery/venue5.jpg',
    'gallery/venue6.jpg',
    'gallery/venue7.jpg',
    'gallery/venue8.jpg',
    'gallery/venue9.jpg',
    'gallery/venue10.jpg',
    'gallery/venue11.jpg',
    'gallery/venue12.jpg',
    'gallery/venue13.jpg',
    'gallery/venue14.jpg',
    'gallery/venue15.jpg',
  ];
  eventImages = [
    'gallery/event34.jpg',
    'gallery/event35.jpg',
    'gallery/event36.jpg',
    'gallery/event37.jpg',
    'gallery/event38.jpg',
    'gallery/event39.jpg',
    'gallery/event40.jpg',
    'gallery/event41.jpg',
    'gallery/event42.jpg',
    'gallery/event43.jpg',
    'gallery/event1.jpeg',
    'gallery/event2.jpeg',
    'gallery/event3.jpeg',
    'gallery/event4.jpeg',
    'gallery/event5.jpeg',
    'gallery/event6.jpeg',
    'gallery/event7.jpeg',
    'gallery/event8.jpeg',
    'gallery/event9.jpeg',
    'gallery/event10.jpeg',
    'gallery/event11.jpeg',
    'gallery/event12.jpeg',
    'gallery/event13.jpeg',
    'gallery/event14.jpeg',
    'gallery/event15.jpeg',
    'gallery/event16.jpeg',
    'gallery/event17.jpeg',
    'gallery/event18.jpeg',
    'gallery/event19.jpeg',
    'gallery/event20.jpeg',
    'gallery/event21.jpeg',
    'gallery/event22.jpeg',
    'gallery/event23.jpeg',
    'gallery/event24.jpeg',
    'gallery/event25.jpeg',
    'gallery/event26.jpeg',
    'gallery/event27.jpeg',
    'gallery/event28.jpg',
    'gallery/event29.jpg',
    'gallery/event30.jpg',
    'gallery/event31.jpg',
    'gallery/event32.jpg',
    'gallery/event33.jpg',
  ];

  currentImage = '';
  currentCategory = '';
  activeTab: string = 'dishes';

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
