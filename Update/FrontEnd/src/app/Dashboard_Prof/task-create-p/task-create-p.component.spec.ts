import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCreatePComponent } from './task-create-p.component';

describe('TaskCreatePComponent', () => {
  let component: TaskCreatePComponent;
  let fixture: ComponentFixture<TaskCreatePComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCreatePComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCreatePComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
