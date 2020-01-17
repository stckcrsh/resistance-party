import { Component, OnInit, Input } from '@angular/core';
import { isNil } from 'ramda';

export enum VOTE {
  APPROVED,
  REJECTED,
  VOTE_LOCKED,
  MISSION_LOCKED,
  NONE
}

@Component({
  selector: 'resistance-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  public VOTE = VOTE;

  @Input()
  public name: string;

  @Input()
  public state: VOTE = VOTE.NONE;

  constructor() {}

  ngOnInit() {}
}
