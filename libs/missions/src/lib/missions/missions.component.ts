import { Component, OnInit, Input } from '@angular/core';
import { Round } from '@resistance/api-interfaces';
import { MISSION_STATUS } from '../mission/mission.component';

@Component({
  selector: 'resistance-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {
  @Input()
  public rounds: Round[];

  @Input()
  public missionSizes: number[];

  public missionStatus = MISSION_STATUS;

  constructor() {}

  ngOnInit() {}
}
