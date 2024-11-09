import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskEditEComponent } from './task-edit-e.component';

describe('TaskEditEComponent', () => {
  let component: TaskEditEComponent;
  let fixture: ComponentFixture<TaskEditEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskEditEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskEditEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
