/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { HTMLAttributes } from "react";

interface DieColumnProps {
  dieWidth: number;
  justifyContent?: string;
}

export const DieColumn: React.FC<
  DieColumnProps & HTMLAttributes<HTMLDivElement>
> = ({ children, dieWidth, justifyContent = "space-between" }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: ${justifyContent || "space-between"};
      width: calc(${dieWidth}px * 0.21);
      height: calc(${dieWidth}px * 0.7);
    `}
  >
    {children}
  </div>
);
