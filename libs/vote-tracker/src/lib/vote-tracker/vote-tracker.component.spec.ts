import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteTrackerComponent } from './vote-tracker.component';

describe('VoteTrackerComponent', () => {
  let component: VoteTrackerComponent;
  let fixture: ComponentFixture<VoteTrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteTrackerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
