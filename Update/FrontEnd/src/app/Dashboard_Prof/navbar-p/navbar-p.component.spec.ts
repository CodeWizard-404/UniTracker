import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarPComponent } from './navbar-p.component';

describe('NavbarPComponent', () => {
  let component: NavbarPComponent;
  let fixture: ComponentFixture<NavbarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
