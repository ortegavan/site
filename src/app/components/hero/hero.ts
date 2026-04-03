import { AfterViewInit, Component, ElementRef, inject, NgZone, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements AfterViewInit {
  private zone = inject(NgZone);
  @ViewChild('kitFormWrapper') kitFormWrapper!: ElementRef;

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      const script = document.createElement('script');
      script.src = 'https://ortegavan.kit.com/6554388e27/index.js';
      script.setAttribute('data-uid', '6554388e27');
      script.async = true;
      this.kitFormWrapper.nativeElement.appendChild(script);
    });
  }
}
