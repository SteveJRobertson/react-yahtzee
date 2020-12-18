import { ROLLS, MAX, MIN } from "./constants";
import { DiceNumbers, DiceState, ScoreCategory } from "./types";
import { getRandomNumber } from "./util";
import { GameState, initialState } from "./GameProvider";

type GameActionType =
  | { type: "START_GAME" }
  | { type: "ROLL_DICE" }
  | { type: "STOP_ROLLING" }
  | { type: "TOGGLE_HOLD_DIE"; id: string }
  | {
      type: "GET_SCORE";
      key: ScoreCategory;
      calculator?: (diceScore: DiceNumbers) => number;
    }
  | { type: "NEXT_ROUND" };

export function gameReducer(state: GameState, action: GameActionType) {
  switch (action.type) {
    case "START_GAME":
      return {
        ...initialState,
        displayGame: true,
        rollButtonDisabled: false,
      };
    case "ROLL_DICE":
      return {
        ...state,
        diceDisabled: true,
        scoreButtonsDisabled: true,
        rollButtonDisabled: true,
        rolling: true,
        rollsRemaining: state.rollsRemaining > 0 ? state.rollsRemaining - 1 : 0,
        dice: state.dice.map((dieState) =>
          dieState.hold
            ? dieState
            : {
                ...dieState,
                score: getRandomNumber(MAX, MIN),
              }
        ) as DiceState,
      };
    case "STOP_ROLLING":
      return {
        ...state,
        diceDisabled: false,
        scoreButtonsDisabled: false,
        rollButtonDisabled: false,
        rolling: false,
      };
    case "TOGGLE_HOLD_DIE":
      return {
        ...state,
        dice: state.dice.map((dieState) =>
          dieState.id !== action.id
            ? dieState
            : {
                ...dieState,
                hold: !dieState.hold,
              }
        ) as DiceState,
      };
    case "GET_SCORE":
      const diceScores = state.dice
        ? (state.dice.map((dieState) => dieState.score) as DiceNumbers)
        : ([0, 0, 0, 0, 0] as DiceNumbers);

      return {
        ...state,
        scores: action.calculator
          ? new Map(state.scores.set(action.key, action.calculator(diceScores)))
          : state.scores,
      };
    case "NEXT_ROUND":
      return {
        ...state,
        roundsRemaining:
          state.roundsRemaining > 0 ? state.roundsRemaining - 1 : 0,
        rollsRemaining: ROLLS,
      };
    default:
      return state;
  }
}
