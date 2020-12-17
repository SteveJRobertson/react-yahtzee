/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { ButtonHTMLAttributes } from "react";

export const ActionButton: React.FC<
  ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, ...buttonProps }) => (
  <button
    {...buttonProps}
    css={css`
      background: Crimson;
      border: none;
      border-radius: 0;
      bottom: 0;
      box-sizing: border-box;
      color: white;
      font-family: "Rye", cursive;
      font-size: 1.5rem;
      line-height: 1.5rem;
      padding: 1rem;
      position: fixed;
      text-transform: uppercase;
      width: 100%;
      &:active {
        background: Gold;
        color: black;
      }
      &:focus {
        outline: none;
      }
    `}
  >
    {children}
  </button>
);
