import { ComponentFixture, TestBed } from '@angular/core/testing';
import Home from './home';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Home],
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-header', () => {
    expect(fixture.nativeElement.querySelector('app-header')).toBeTruthy();
  });

  it('should render app-hero', () => {
    expect(fixture.nativeElement.querySelector('app-hero')).toBeTruthy();
  });

  it('should render app-about', () => {
    expect(fixture.nativeElement.querySelector('app-about')).toBeTruthy();
  });

  it('should render app-book', () => {
    expect(fixture.nativeElement.querySelector('app-book')).toBeTruthy();
  });

  it('should render app-courses', () => {
    expect(fixture.nativeElement.querySelector('app-courses')).toBeTruthy();
  });

  it('should render app-email', () => {
    expect(fixture.nativeElement.querySelector('app-email')).toBeTruthy();
  });

  it('should render app-footer', () => {
    expect(fixture.nativeElement.querySelector('app-footer')).toBeTruthy();
  });
});
