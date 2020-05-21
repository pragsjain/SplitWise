import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseDescComponent } from './expense-desc.component';

describe('ExpenseDescComponent', () => {
  let component: ExpenseDescComponent;
  let fixture: ComponentFixture<ExpenseDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpenseDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
