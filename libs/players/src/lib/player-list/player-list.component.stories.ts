
import { PlayersModule } from '../players.module';
import { PlayerListComponent } from './player-list.component';

export default {
  title: 'PlayerListComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: PlayerListComponent,
  props: {
  }
})
