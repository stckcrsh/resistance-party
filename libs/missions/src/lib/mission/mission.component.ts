import { Component, OnInit, Input, HostBinding } from '@angular/core';

export enum MISSION_STATUS {
  SUCCESS,
  FAILURE,
  NONE
}

@Component({
  selector: 'resistance-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {
  @Input()
  public size: number;

  @Input()
  public status: MISSION_STATUS;

  @Input()
  public current: boolean;

  public get success() {
    return this.status === MISSION_STATUS.SUCCESS;
  }

  public get failure() {
    return this.status === MISSION_STATUS.FAILURE;
  }

  constructor() {}

  ngOnInit() {}
}
