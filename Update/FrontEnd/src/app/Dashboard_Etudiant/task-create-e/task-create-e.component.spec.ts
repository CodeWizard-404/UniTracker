import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCreateEComponent } from './task-create-e.component';

describe('TaskCreateEComponent', () => {
  let component: TaskCreateEComponent;
  let fixture: ComponentFixture<TaskCreateEComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskCreateEComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TaskCreateEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
