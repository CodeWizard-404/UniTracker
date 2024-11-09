import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskListPComponent } from './task-list-p.component';

describe('TaskListPComponent', () => {
  let component: TaskListPComponent;
  let fixture: ComponentFixture<TaskListPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskListPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskListPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
