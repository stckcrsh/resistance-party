import { MissionsModule } from '../missions.module';
import { MissionComponent, MISSION_STATUS } from './mission.component';

export default {
  title: 'MissionComponent'
};

export const All = () => ({
  moduleMetadata: {
    imports: [],
    declarations: [MissionComponent]
  },
  template: `
  <div style="width:150px;">
    <resistance-mission
        [size]="3"
        [status]="success"
        [current]="false"></resistance-mission>
  </div>
  <div style="width:150px;">
    <resistance-mission
        [size]="3"
        [status]="failure"
        [current]="false"></resistance-mission>
  </div>
  <div style="width:150px;">
    <resistance-mission
        [size]="3"
        [status]="none"
        [current]="true"></resistance-mission>
  </div>`,
  props: {
    success: MISSION_STATUS.SUCCESS,
    failure: MISSION_STATUS.FAILURE,
    none: MISSION_STATUS.NONE
  }
});

export const Success = () => ({
  moduleMetadata: {
    imports: [],
    declarations: [MissionComponent]
  },
  template: `
  <div style="width:150px;">
    <resistance-mission
        [size]="size"
        [status]="status"
        [current]="current"></resistance-mission>
  </div>`,
  props: {
    size: 3,
    status: MISSION_STATUS.SUCCESS,
    current: false
  }
});

export const Failure = () => ({
  moduleMetadata: {
    imports: [],
    declarations: [MissionComponent]
  },
  template: `
  <div style="width:150px;">
    <resistance-mission
        [size]="size"
        [status]="status"
        [current]="current"></resistance-mission>
  </div>`,
  props: {
    size: 3,
    status: MISSION_STATUS.FAILURE,
    current: false
  }
});

export const Current = () => ({
  moduleMetadata: {
    imports: [],
    declarations: [MissionComponent]
  },
  template: `
  <div style="width:150px;">
    <resistance-mission
        [size]="size"
        [status]="status"
        [current]="current"></resistance-mission>
  </div>`,
  props: {
    size: 3,
    status: MISSION_STATUS.NONE,
    current: true
  }
});
