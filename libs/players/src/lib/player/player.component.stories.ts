import { AngularFittextModule } from 'angular-fittext';
import { PlayerComponent, VOTE } from './player.component';
import { MatIconModule } from '@angular/material/icon';
const styles = `
  <style>
    .box-medium {
      width: 250px;
      height: auto;
    }
  </style>
`;

export default {
  title: 'PlayerComponent'
};

export const Primary = () => ({
  moduleMetadata: {
    imports: [AngularFittextModule, MatIconModule],
    declarations: [PlayerComponent]
  },
  template: `
    ${styles}
    <div class="box-medium">
      <resistance-player
        [name]="name"
        [state]="state"
        ></resistance-player>
    </div>
  `,
  props: {
    name: 'Zach',
    state: VOTE.NONE
  }
});
export const MissionLocked = () => ({
  moduleMetadata: {
    imports: [AngularFittextModule, MatIconModule],
    declarations: [PlayerComponent]
  },
  template: `
    ${styles}
    <div class="box-medium">
      <resistance-player
        [name]="name"
        [state]="state"
        ></resistance-player>
    </div>
  `,
  props: {
    name: 'Zach',
    state: VOTE.MISSION_LOCKED
  }
});
export const VoteLocked = () => ({
  moduleMetadata: {
    imports: [AngularFittextModule, MatIconModule],
    declarations: [PlayerComponent]
  },
  template: `
    ${styles}
    <div class="box-medium">
      <resistance-player
        [name]="name"
        [state]="state"
        ></resistance-player>
    </div>
  `,
  props: {
    name: 'Zach',
    state: VOTE.VOTE_LOCKED
  }
});
export const Approved = () => ({
  moduleMetadata: {
    imports: [AngularFittextModule, MatIconModule],
    declarations: [PlayerComponent]
  },
  template: `
    ${styles}
    <div class="box-medium">
      <resistance-player
        [name]="name"
        [state]="state"
        ></resistance-player>
    </div>
  `,
  props: {
    name: 'Zach',
    state: VOTE.APPROVED
  }
});
export const Rejected = () => ({
  moduleMetadata: {
    imports: [AngularFittextModule, MatIconModule],
    declarations: [PlayerComponent]
  },
  template: `
    ${styles}
    <div class="box-medium">
      <resistance-player
        [name]="name"
        [state]="state"
        ></resistance-player>
    </div>
  `,
  props: {
    name: 'Zach',
    state: VOTE.REJECTED
  }
});
