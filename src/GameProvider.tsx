import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useReducer,
} from "react";
import { nanoid } from "nanoid";
import { NUM_CATEGORIES, ROLLS } from "./constants";
import { DiceNumbers, DiceState, Scores, ScoreCategory } from "./types";
import { gameReducer } from "./gameReducer";

interface GameProviderProps {
  children?: ReactNode;
}

export interface GameState {
  displayGame: boolean;
  scoreButtonsDisabled: boolean;
  diceDisabled: boolean;
  rollButtonDisabled: boolean;
  roundsRemaining: number;
  rollsRemaining: number;
  lastRoll: number | null;
  roundInProgress: boolean;
  rolling: boolean;
  rolled: boolean;
  dice: DiceState;
  scores: Scores;
  selectedScore: ScoreCategory | null;
}

type CalculatorFunction = (diceScore: DiceNumbers) => number;

const gameCtx = createContext(
  {} as {
    state: GameState;
    startGame: () => void;
    rollDice: () => void;
    stopRolling: () => void;
    toggleHoldDie: (id: string) => void;
    selectScore: (key: ScoreCategory, calculator?: CalculatorFunction) => void;
    deselectScore: (key: ScoreCategory) => void;
    nextRound: () => void;
  }
);

export const useGame = () => useContext(gameCtx);

const diceIds = [nanoid(), nanoid(), nanoid(), nanoid(), nanoid()];

export const initialState: GameState = {
  displayGame: false,
  scoreButtonsDisabled: true,
  diceDisabled: true,
  rollButtonDisabled: true,
  roundsRemaining: NUM_CATEGORIES,
  roundInProgress: false,
  rollsRemaining: ROLLS,
  lastRoll: null,
  rolling: false,
  rolled: false,
  dice: [
    { id: diceIds[0], hold: false, score: 0 },
    { id: diceIds[1], hold: false, score: 0 },
    { id: diceIds[2], hold: false, score: 0 },
    { id: diceIds[3], hold: false, score: 0 },
    { id: diceIds[4], hold: false, score: 0 },
  ],
  scores: new Map(),
  selectedScore: null,
};

export const GameProvider: React.FC<GameProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const startGame = useCallback(() => dispatch({ type: "START_GAME" }), [
    dispatch,
  ]);

  const rollDice = useCallback(() => dispatch({ type: "ROLL_DICE" }), [
    dispatch,
  ]);

  const stopRolling = useCallback(() => dispatch({ type: "STOP_ROLLING" }), [
    dispatch,
  ]);

  const selectScore = useCallback(
    (key, calculator) => dispatch({ type: "SELECT_SCORE", key, calculator }),
    [dispatch]
  );

  const deselectScore = useCallback(
    (key) => dispatch({ type: "DESELECT_SCORE", key }),
    [dispatch]
  );

  const toggleHoldDie = useCallback(
    (id: string) => dispatch({ type: "TOGGLE_HOLD_DIE", id }),
    [dispatch]
  );

  const nextRound = useCallback(async () => {
    await dispatch({ type: "NEXT_ROUND" });
    await dispatch({ type: "ROLL_DICE" });
  }, [dispatch]);

  return (
    <gameCtx.Provider
      value={{
        state,
        startGame,
        rollDice,
        stopRolling,
        toggleHoldDie,
        selectScore,
        deselectScore,
        nextRound,
      }}
    >
      {children}
    </gameCtx.Provider>
  );
};
