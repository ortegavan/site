import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Email } from './email';

describe('Email', () => {
  let component: Email;
  let fixture: ComponentFixture<Email>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Email],
    }).compileComponents();

    fixture = TestBed.createComponent(Email);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with id "email"', () => {
    const section = fixture.nativeElement.querySelector('section#email');
    expect(section).toBeTruthy();
  });

  it('should render contact heading', () => {
    const h2: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Quer bater um papo?');
  });

  it('should render mailto link', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a[href^="mailto:"]');
    expect(link).toBeTruthy();
    expect(link.getAttribute('href')).toBe('mailto:oi@ortegavan.com.br');
  });

  it('should display email address as link text', () => {
    const link: HTMLAnchorElement = fixture.nativeElement.querySelector('a[href^="mailto:"]');
    expect(link.textContent).toContain('oi@ortegavan.com.br');
  });
});
