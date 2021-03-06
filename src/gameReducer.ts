import { ROLLS, MAX, MIN, NUM_CATEGORIES } from "./constants";
import { DiceNumbers, DiceState, ScoreCategory } from "./types";
import { getRandomNumber, getUpperBonus, getTotalScore } from "./util";
import { GameState, initialState } from "./GameProvider";

type GameActionType =
  | { type: "START_GAME" }
  | { type: "ROLL_DICE" }
  | { type: "STOP_ROLLING" }
  | { type: "TOGGLE_HOLD_DIE"; id: string }
  | {
      type: "SELECT_SCORE";
      key: ScoreCategory;
      calculator?: (diceScore: DiceNumbers) => number;
    }
  | {
      type: "DESELECT_SCORE";
      key: ScoreCategory;
    }
  | { type: "NEXT_ROUND" };

export function gameReducer(state: GameState, action: GameActionType) {
  let newScores = state.scores;

  switch (action.type) {
    case "START_GAME":
      return {
        ...initialState,
        displayGame: true,
        rollButtonDisabled: false,
        roundsRemaining: NUM_CATEGORIES - 1,
        upperScoreBonus: 0,
        totalScore: 0,
      };
    case "ROLL_DICE":
      const rollsRemaining =
        state.rollsRemaining > 0 ? state.rollsRemaining - 1 : 0;
      return {
        ...state,
        diceDisabled: true,
        scoreButtonsDisabled: true,
        rollButtonDisabled: true,
        rolling: true,
        rollsRemaining,
        lastRoll: rollsRemaining,
        dice: state.dice.map((dieState) =>
          dieState.hold
            ? dieState
            : {
                ...dieState,
                count: dieState.count + 1,
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
        rolled: true,
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
    case "SELECT_SCORE":
      const diceScores = state.dice
        ? (state.dice.map((dieState) => dieState.score) as DiceNumbers)
        : ([0, 0, 0, 0, 0] as DiceNumbers);

      let scoresToUpdate = state.selectedScore
        ? newScores.delete(state.selectedScore)
          ? new Map(newScores)
          : new Map(state.scores)
        : new Map(state.scores);

      return {
        ...state,
        scores: action.calculator
          ? new Map(
              scoresToUpdate.set(action.key, action.calculator(diceScores))
            )
          : state.scores,
        selectedScore: action.key,
        upperScoreBonus: getUpperBonus(scoresToUpdate),
        totalScore: getTotalScore(scoresToUpdate),
      };
    case "DESELECT_SCORE":
      return {
        ...state,
        scores: newScores.delete(action.key) ? newScores : state.scores,
        selectedScore: null,
      };
    case "NEXT_ROUND":
      return {
        ...state,
        diceDisabled: true,
        scoreButtonsDisabled: true,
        roundsRemaining:
          state.roundsRemaining > 0 ? state.roundsRemaining - 1 : 0,
        rollsRemaining: ROLLS,
        dice: state.dice.map((dieState) => ({
          ...dieState,
          hold: false,
        })) as DiceState,
        selectedScore: null,
      };
    default:
      return state;
  }
}
