import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerClasseComponent } from './creer-classe.component';

describe('CreerClasseComponent', () => {
  let component: CreerClasseComponent;
  let fixture: ComponentFixture<CreerClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreerClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreerClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
