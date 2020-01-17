export type playerName = string;

export interface GameContext {
  players: {
    [playerName: string]: string; // role
  };
  turnOrder: playerName[];
  missionSizes: number[]; // 2,3,4,3,4
  state: string; // GAME_CREATION | TEAM_SETUP | TEAM_BUILDING
  rounds: Round[];
  currentRound: Round;
  currentTurn: Turn;
}

export interface Round {
  missionSuccess: boolean | null;
  turns: Turn[];
}

export interface Turn {
  leader: string; // player names
  team: string[]; // player names
  isApproved?: boolean | null;
  votes: {
    [playerName: string]: boolean;
  };
  missionSuccess?: boolean | null;
}
