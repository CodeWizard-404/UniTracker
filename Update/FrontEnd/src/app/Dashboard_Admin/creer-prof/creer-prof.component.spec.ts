import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerProfComponent } from './creer-prof.component';

describe('CreerProfComponent', () => {
  let component: CreerProfComponent;
  let fixture: ComponentFixture<CreerProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerProfComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreerProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
