import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
  inject,
} from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-boas-praticas',
  imports: [Header, Footer],
  templateUrl: './boas-praticas.html',
  styleUrl: './boas-praticas.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class BoasPraticas implements AfterViewInit {
  private zone = inject(NgZone);

  @ViewChild('kitFormHero') kitFormHero!: ElementRef;
  @ViewChild('kitFormCta') kitFormCta!: ElementRef;

  ngAfterViewInit(): void {
    const uid = '0032279c61';
    this.loadKitForm(this.kitFormHero, uid);
    this.loadKitForm(this.kitFormCta, uid);
  }

  onAccordionToggle(event: Event): void {
    const opened = event.target as HTMLDetailsElement;
    if (opened.open) {
      const accordion = opened.parentElement;
      accordion?.querySelectorAll<HTMLDetailsElement>('details[open]').forEach((sibling) => {
        if (sibling !== opened) {
          sibling.open = false;
        }
      });
    }
  }

  private loadKitForm(wrapper: ElementRef, uid: string): void {
    this.zone.runOutsideAngular(() => {
      const script = document.createElement('script');
      script.src = `https://ortegavan.kit.com/${uid}/index.js`;
      script.setAttribute('data-uid', uid);
      script.async = true;
      wrapper.nativeElement.appendChild(script);
    });
  }
}
