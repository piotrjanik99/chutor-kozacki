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
  imageDescription = input(['']);
  imageTitle = input(['']);

  carouselId!: string;

  ngOnInit(): void {
    this.imageTitle().map((imageTitle) => {
      imageTitle === 'Szef kuchni' ? console.log('yes') : console.log('no');
    })
    this.carouselId = 'carousel-' + Math.random().toString(36).substr(2, 9);
  }
}
