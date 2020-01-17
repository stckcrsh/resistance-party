import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { MatIconModule } from '@angular/material/icon';
import { AngularFittextModule } from 'angular-fittext';

@NgModule({
  imports: [CommonModule, MatIconModule, AngularFittextModule],
  declarations: [PlayerComponent, PlayerListComponent]
})
export class PlayersModule {}
