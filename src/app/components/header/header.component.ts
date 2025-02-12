import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  menuOpen = false;

  lastScrollTop = 0;
  isHidden = false;

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > this.lastScrollTop) {
      this.isHidden = true; // Hide header when scrolling down
    } else {
      this.isHidden = false; // Show header when scrolling up
    }
    this.lastScrollTop = scrollTop;
  }
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
