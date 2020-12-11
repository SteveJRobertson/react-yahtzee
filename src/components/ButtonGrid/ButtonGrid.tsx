import { HTMLAttributes } from "react";
/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro"; // eslint-disable-line @typescript-eslint/no-unused-vars

export const ButtonGrid: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => (
  <div
    css={css`
      padding: 0.5rem;
      position: relative;
    `}
  >
    <div
      css={css`
        display: grid;
        gap: 0.5rem 0.5rem;
        grid-auto-flow: column;
        grid-template-columns: repeat(2, calc(50% - 0.25rem));
        grid-template-rows: repeat(7, 8vh);
      `}
    >
      {children}
    </div>
  </div>
);
