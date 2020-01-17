import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MissionsComponent } from './missions/missions.component';
import { MissionComponent } from './mission/mission.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MissionsComponent, MissionComponent],
  exports: [MissionsComponent]
})
export class MissionsModule {}
