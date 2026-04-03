import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Book } from './book';

describe('Book', () => {
  let component: Book;
  let fixture: ComponentFixture<Book>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Book],
    }).compileComponents();

    fixture = TestBed.createComponent(Book);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with id "book"', () => {
    const section = fixture.nativeElement.querySelector('section#book');
    expect(section).toBeTruthy();
  });

  it('should render book title in h2', () => {
    const h2: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Angular na prática');
  });

  it('should render CTA link with correct text', () => {
    const cta: HTMLAnchorElement = fixture.nativeElement.querySelector('a.btn');
    expect(cta).toBeTruthy();
    expect(cta.textContent).toContain('Quero aprender Angular');
  });

  it('should open CTA link in a new tab', () => {
    const cta: HTMLAnchorElement = fixture.nativeElement.querySelector('a.btn');
    expect(cta.getAttribute('target')).toBe('_blank');
  });

  it('should render book cover image', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img).toBeTruthy();
  });
});
