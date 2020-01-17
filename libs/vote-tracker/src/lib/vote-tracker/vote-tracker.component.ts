import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'resistance-vote-tracker',
  templateUrl: './vote-tracker.component.html',
  styleUrls: ['./vote-tracker.component.scss']
})
export class VoteTrackerComponent implements OnInit {
  @Input()
  public currentTurn = 0;

  constructor() {}

  ngOnInit() {}
}
