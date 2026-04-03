import { ComponentFixture, TestBed } from '@angular/core/testing';
import { About } from './about';

describe('About', () => {
  let component: About;
  let fixture: ComponentFixture<About>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [About],
    }).compileComponents();

    fixture = TestBed.createComponent(About);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render section with id "about"', () => {
    const section = fixture.nativeElement.querySelector('section#about');
    expect(section).toBeTruthy();
  });

  it('should render "Sobre mim" heading', () => {
    const h2: HTMLHeadingElement = fixture.nativeElement.querySelector('h2');
    expect(h2.textContent).toContain('Sobre mim');
  });

  it('should render profile image with alt text', () => {
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img).toBeTruthy();
    expect(img.getAttribute('alt')).toContain('Vanessa Ortega');
  });

  it('should render 5 social media links', () => {
    const links = fixture.nativeElement.querySelectorAll('.social a');
    expect(links.length).toBe(5);
  });

  it('should open social links in a new tab', () => {
    const links: NodeListOf<HTMLAnchorElement> =
      fixture.nativeElement.querySelectorAll('.social a');
    Array.from(links).forEach((link) => {
      expect(link.getAttribute('target')).toBe('_blank');
    });
  });
});
