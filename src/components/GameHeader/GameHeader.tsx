/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { useGame } from "../../GameProvider";
import { getTotalScore } from "../../util";

export const GameHeader: React.FC = () => {
  const {
    state: { scores },
  } = useGame();

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
      <span>Score: {getTotalScore(scores)}</span>
    </header>
  );
};
