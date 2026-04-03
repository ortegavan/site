import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Header } from './header';

describe('Header', () => {
  let component: Header;
  let fixture: ComponentFixture<Header>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Header],
    }).compileComponents();

    fixture = TestBed.createComponent(Header);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with menu closed', () => {
    expect(component.menuOpen()).toBe(false);
  });

  it('should open menu on toggleMenu()', () => {
    component.toggleMenu();
    expect(component.menuOpen()).toBe(true);
  });

  it('should close menu on second toggleMenu()', () => {
    component.toggleMenu();
    component.toggleMenu();
    expect(component.menuOpen()).toBe(false);
  });

  it('should close menu on closeMenu()', () => {
    component.toggleMenu();
    component.closeMenu();
    expect(component.menuOpen()).toBe(false);
  });

  it('should add .open class to nav when menu is open', () => {
    component.toggleMenu();
    fixture.detectChanges();
    const nav: HTMLElement = fixture.nativeElement.querySelector('nav');
    expect(nav.classList.contains('open')).toBe(true);
  });

  it('should not have .open class on nav when menu is closed', () => {
    const nav: HTMLElement = fixture.nativeElement.querySelector('nav');
    expect(nav.classList.contains('open')).toBe(false);
  });

  it('should set aria-expanded to false on toggle button initially', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.menu-toggle');
    expect(button.getAttribute('aria-expanded')).toBe('false');
  });

  it('should set aria-expanded to true when menu is open', () => {
    component.toggleMenu();
    fixture.detectChanges();
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('.menu-toggle');
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });

  it('should render logo with "ortegavan" text', () => {
    const logo: HTMLElement = fixture.nativeElement.querySelector('.logo');
    expect(logo.textContent).toContain('ortegavan');
  });

  it('should render 5 navigation links', () => {
    const links = fixture.nativeElement.querySelectorAll('nav a');
    expect(links.length).toBe(5);
  });

  it('should close menu when a nav link is clicked', () => {
    component.toggleMenu();
    fixture.detectChanges();
    const firstLink: HTMLAnchorElement = fixture.nativeElement.querySelector('nav a');
    firstLink.click();
    expect(component.menuOpen()).toBe(false);
  });
});
