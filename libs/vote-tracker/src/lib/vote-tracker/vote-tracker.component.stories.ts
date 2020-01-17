
import { VoteTrackerModule } from '../vote-tracker.module';
import { VoteTrackerComponent } from './vote-tracker.component';

export default {
  title: 'VoteTrackerComponent'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: VoteTrackerComponent,
  props: {
    currentTurn: 3
  }
})
