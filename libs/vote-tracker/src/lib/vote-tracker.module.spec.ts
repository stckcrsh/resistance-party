import { async, TestBed } from '@angular/core/testing';
import { VoteTrackerModule } from './vote-tracker.module';

describe('VoteTrackerModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [VoteTrackerModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(VoteTrackerModule).toBeDefined();
  });
});
