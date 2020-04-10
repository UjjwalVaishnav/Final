import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveConfigEditComponent } from './leave-config-edit.component';

describe('LeaveConfigEditComponent', () => {
  let component: LeaveConfigEditComponent;
  let fixture: ComponentFixture<LeaveConfigEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveConfigEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveConfigEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
