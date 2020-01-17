import { async, TestBed } from '@angular/core/testing';
import { MissionsModule } from './missions.module';

describe('MissionsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MissionsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MissionsModule).toBeDefined();
  });
});
