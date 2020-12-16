import { createContext, useContext } from "react";
// import { DiceState, Score, ScoreType } from "./types";

interface GameContextProps {
  // diceState?: DiceState;
  // round?: number;
  // roundComplete?: boolean;
  // scored?: boolean;
  // scores?: Score[];
  // totalLowerScore?: number;
  // totalUpperScore?: number;
  // turnStarted?: boolean;
  // updateScores?: (arg0: Map<ScoreType, number | null>) => void;
  // upperScoreBonus?: number;
  // onHold?: (arg0: string) => any;
  // onScored?: () => any;
  diceWidth?: number;
}

export const GameCtx = createContext<GameContextProps>({});
export const useGame = () => useContext(GameCtx);
