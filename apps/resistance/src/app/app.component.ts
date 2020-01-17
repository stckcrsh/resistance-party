import { Component } from '@angular/core';
import { Round } from '@resistance/api-interfaces';

@Component({
  selector: 'resistance-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resistance';

  rounds: Round[] = [];
  missionSizes = [2, 3, 4, 3, 4];
  currentTurn = 2;
}
