import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDescComponent } from './group-desc.component';

describe('GroupDescComponent', () => {
  let component: GroupDescComponent;
  let fixture: ComponentFixture<GroupDescComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDescComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
