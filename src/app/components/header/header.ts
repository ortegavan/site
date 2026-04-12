import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  private router = inject(Router);
  menuOpen = signal(false);

  navigateTo(event: Event, fragment: string): void {
    event.preventDefault();
    this.closeMenu();

    if (this.router.url.startsWith('/home')) {
      document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      this.router.navigate(['home']);
      const sub = this.router.events
        .pipe(filter((e) => e instanceof NavigationEnd))
        .subscribe(() => {
          sub.unsubscribe();
          setTimeout(() => document.getElementById(fragment)?.scrollIntoView({ behavior: 'smooth' }), 50);
        });
    }
  }

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}
