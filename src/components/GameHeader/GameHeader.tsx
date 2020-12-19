/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { CATEGORIES, UPPER_BONUS, UPPER_BONUS_SCORE } from "../../constants";
import { useGame } from "../../GameProvider";
import { ScoreCategory } from "../../types";

export const GameHeader: React.FC = () => {
  const {
    state: { scores },
  } = useGame();

  const upperScore = CATEGORIES.upper
    .map((category) => category.id)
    .map((id) =>
      scores ? scores.get((id as unknown) as ScoreCategory) || 0 : 0
    )
    .reduce((total, score) => total + score);
  const lowerScore = CATEGORIES.lower
    .map((category) => category.id)
    .map((id) =>
      scores ? scores.get((id as unknown) as ScoreCategory) || 0 : 0
    )
    .reduce((total, score) => total + score);

  const upperScoreBonus = upperScore >= UPPER_BONUS_SCORE ? UPPER_BONUS : 0;

  const totalScore = upperScore + lowerScore + upperScoreBonus;

  return (
    <header
      css={css`
        align-items: center;
        background-color: Crimson;
        box-shadow: 0 0.5vh 2vh rgba(0, 0, 0, 0.25);
        color: white;
        display: flex;
        font-family: "Lato", sans-serif;
        font-size: 1.25rem;
        height: 1.5rem;
        justify-content: space-between;
        padding: 0.5rem;
        position: fixed;
        width: 100%;
      `}
    >
      <span>Score: {totalScore}</span>
    </header>
  );
};
