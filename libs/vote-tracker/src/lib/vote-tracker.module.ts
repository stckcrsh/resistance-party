import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VoteTrackerComponent } from './vote-tracker/vote-tracker.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VoteTrackerComponent],
  exports: [VoteTrackerComponent]
})
export class VoteTrackerModule {}
