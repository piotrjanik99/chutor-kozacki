import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CarouselComponent implements OnInit {
  purpose = input('')
  images = input(['']);
  imageDescription = input (['']);

  carouselId!: string;

  ngOnInit(): void {
    this.carouselId = 'carousel-' + Math.random().toString(36).substr(2, 9);
  }
}
