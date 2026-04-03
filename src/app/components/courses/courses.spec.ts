import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Courses } from './courses';

describe('Courses', () => {
  let component: Courses;
  let fixture: ComponentFixture<Courses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Courses],
    }).compileComponents();

    fixture = TestBed.createComponent(Courses);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with id "courses"', () => {
    const section = fixture.nativeElement.querySelector('section#courses');
    expect(section).toBeTruthy();
  });

  it('should render "Em breve" heading', () => {
    const h2: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Em breve');
  });

  it('should render 3 course cards', () => {
    const cards = fixture.nativeElement.querySelectorAll('app-card');
    expect(cards.length).toBe(3);
  });

  it('should mention newsletter in the subtitle', () => {
    const paragraphs: NodeListOf<HTMLParagraphElement> =
      fixture.nativeElement.querySelectorAll('p');
    const hasNewsletter = Array.from(paragraphs).some((p) => p.textContent?.includes('newsletter'));
    expect(hasNewsletter).toBe(true);
  });
});
