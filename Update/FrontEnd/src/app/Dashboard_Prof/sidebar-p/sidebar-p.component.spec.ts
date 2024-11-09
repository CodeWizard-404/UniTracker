import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarPComponent } from './sidebar-p.component';

describe('SidebarPComponent', () => {
  let component: SidebarPComponent;
  let fixture: ComponentFixture<SidebarPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidebarPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});