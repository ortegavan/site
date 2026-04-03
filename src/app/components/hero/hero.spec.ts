import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hero } from './hero';

describe('Hero', () => {
  let component: Hero;
  let fixture: ComponentFixture<Hero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hero],
    }).compileComponents();

    fixture = TestBed.createComponent(Hero);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with id "home"', () => {
    const section = fixture.nativeElement.querySelector('section#home');
    expect(section).toBeTruthy();
  });

  it('should render greeting in h1', () => {
    const h1: HTMLHeadingElement = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('Olá, eu sou a');
  });

  it('should render newsletter mention in the text', () => {
    const paragraphs: NodeListOf<HTMLParagraphElement> =
      fixture.nativeElement.querySelectorAll('p');
    const hasNewsletter = Array.from(paragraphs).some((p) => p.textContent?.includes('newsletter'));
    expect(hasNewsletter).toBe(true);
  });

  it('should append script tag for kit.com form on init', () => {
    const wrapper: HTMLElement = fixture.nativeElement.querySelector('.kit-form-wrapper');
    const script: HTMLScriptElement = wrapper.querySelector('script')!;
    expect(script).toBeTruthy();
    expect(script.getAttribute('data-uid')).toBe('6554388e27');
  });
});
