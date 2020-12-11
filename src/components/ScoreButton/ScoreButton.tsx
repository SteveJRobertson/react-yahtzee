import { HTMLAttributes } from "react";
/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro"; // eslint-disable-line @typescript-eslint/no-unused-vars

interface ScoreButtonProps {
  score?: number | null;
  name?: string;
  longText?: boolean;
}

export const ScoreButton: React.FC<
  ScoreButtonProps & HTMLAttributes<HTMLButtonElement>
> = ({ id, score, name, longText, ...buttonProps }) => (
  <button
    css={css`
      align-items: center;
      background: transparent;
      border: 0.5vw double white;
      border-radius: 2vh;
      box-sizing: border-box;
      color: white;
      display: flex;
      font-family: "Rye", cursive;
      justify-content: space-between;
      text-align: left;
      text-transform: uppercase;
      padding: 0.5rem 0.5rem 0.5rem 1rem;
      &:active {
        background: Gold;
        border-color: black;
        color: black;
      }
      &:focus {
        outline: none;
      }
    `}
    {...buttonProps}
  >
    <span
      css={css`
        flex: 1;
        font-size: ${longText ? "2.25vh" : "3vh"};
        padding-right: 3vw;
      `}
    >
      {name}
    </span>
    {score ? (
      <span
        css={css`
          align-items: center;
          background-color: Crimson;
          border-radius: 1vh;
          color: white;
          display: flex;
          font-size: 2.5vh;
          justify-content: center;
          height: 5vh;
          width: 5vh;
        `}
      >
        {score}
      </span>
    ) : null}
  </button>
);
