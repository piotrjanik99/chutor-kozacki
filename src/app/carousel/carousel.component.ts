import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, input, signal, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit, AfterViewInit {
  purpose = input('')
  images = input(['']);
  imageDescription = input(['']);
  imageTitle = input(['']);
  descriptionHeight = input<{ base: number; md: number; lg: number }>({ base: 168, md: 190, lg: 220 });
  hideButtons: boolean = false;

  carouselId!: string;
  activeIndex = signal(0);

  private carouselRoot = viewChild<ElementRef<HTMLDivElement>>('carouselRoot');

  ngOnInit(): void {
    this.imageTitle().map((imageTitle) => {
      imageTitle === 'Szef kuchni' ? this.hideButtons = true : this.hideButtons = false;
    })
    this.carouselId = 'carousel-' + Math.random().toString(36).substr(2, 9);
  }

  ngAfterViewInit(): void {
    this.carouselRoot()?.nativeElement.addEventListener('slid.bs.carousel', (event: any) => {
      this.activeIndex.set(event.to);
    });
  }
}
