import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  imports: [CommonModule], 
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  slides = [
    '/slider1.jpeg',
    '/slider2.jpeg',
    '/slider3.jpeg'
  ];
  
  
  
  currentSlide = 0;

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }
}
