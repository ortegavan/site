import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Card } from './card';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title when provided', () => {
    fixture.componentRef.setInput('title', 'Curso Angular');
    fixture.detectChanges();
    const h3: HTMLHeadingElement = fixture.nativeElement.querySelector('h3');
    expect(h3).toBeTruthy();
    expect(h3.textContent).toContain('Curso Angular');
  });

  it('should not render h3 when title is not provided', () => {
    const h3 = fixture.nativeElement.querySelector('h3');
    expect(h3).toBeNull();
  });

  it('should render icon element when icon is provided', () => {
    fixture.componentRef.setInput('icon', 'fa-duotone fa-solid fa-star');
    fixture.detectChanges();
    const icon: HTMLElement = fixture.nativeElement.querySelector('i');
    expect(icon).toBeTruthy();
    expect(icon.classList.contains('fa-solid')).toBe(true);
  });

  it('should not render icon element when icon is not provided', () => {
    const icon = fixture.nativeElement.querySelector('i');
    expect(icon).toBeNull();
  });
});
