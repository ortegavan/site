import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Footer } from './footer';

describe('Footer', () => {
  let component: Footer;
  let fixture: ComponentFixture<Footer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Footer],
    }).compileComponents();

    fixture = TestBed.createComponent(Footer);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render footer element', () => {
    const footer = fixture.nativeElement.querySelector('footer');
    expect(footer).toBeTruthy();
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

  it('should display contact email address', () => {
    const text: string = fixture.nativeElement.textContent;
    expect(text).toContain('oi@ortegavan.com.br');
  });
});
