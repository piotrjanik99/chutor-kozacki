import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, inject, input, signal, viewChild } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { TranslatePipe } from '../pipes/translate.pipe';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, TranslatePipe],
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

  protected languageService = inject(LanguageService);
  carouselId!: string;
  activeIndex = signal(0);

  private carouselRoot = viewChild<ElementRef<HTMLDivElement>>('carouselRoot');

  ngOnInit(): void {
    this.hideButtons = this.images().length <= 1;
    this.carouselId = 'carousel-' + Math.random().toString(36).substr(2, 9);
  }

  ngAfterViewInit(): void {
    this.carouselRoot()?.nativeElement.addEventListener('slid.bs.carousel', (event: any) => {
      this.activeIndex.set(event.to);
    });
  }
}
