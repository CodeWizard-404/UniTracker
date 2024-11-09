import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListEComponent } from './task-list-e.component';

describe('TaskListEComponent', () => {
  let component: TaskListEComponent;
  let fixture: ComponentFixture<TaskListEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskListEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
