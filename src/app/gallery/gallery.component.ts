import {AfterViewInit, Component, ElementRef, inject, TemplateRef, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('galleryTop') galleryTop!: ElementRef;
  @ViewChild('imageModal') imageModal!: TemplateRef<any>;
  currentImageIndex = 0;
  modalService = inject(NgbModal);

  images = [
    'dish1.png', 'dish2.png', 'dish3.png', 'dish4.png', 'event1.png', 'event2.png', 'event3.png', 'staff1.png', 'staff2.png', 'staff3.png', 'bg.jpg', 'bg2.jpg'
  ];

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

  openModal(index: number) {
    this.currentImageIndex = index;
    this.modalService.open(this.imageModal, {
      animation: false,
      size: 'lg',
      centered: true
    });
  }
}
