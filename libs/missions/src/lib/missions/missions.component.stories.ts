import { MissionsModule } from '../missions.module';
import { MissionsComponent } from './missions.component';
import { Round } from '../../../../api-interfaces/src/lib/api-interfaces';
import { MissionComponent } from '../mission/mission.component';

export default {
  title: 'MissionsComponent'
};

const defaultRound: Round = {
  missionSuccess: false,
  turns: []
};

export const Primary = () => ({
  moduleMetadata: {
    imports: [],
    declarations: [MissionComponent]
  },
  component: MissionsComponent,
  props: {
    rounds: [
      {
        ...defaultRound,
        missionSuccess: true
      },
      {
        ...defaultRound,
        missionSuccess: true
      },
      defaultRound
    ],
    missionSizes: [2, 3, 4, 5, 6]
  }
});
