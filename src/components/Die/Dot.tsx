/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro"; // eslint-disable-line @typescript-eslint/no-unused-vars

interface DotProps {
  alignSelf?: string;
  dieWidth: number;
}

export const Dot: React.FC<DotProps> = ({ alignSelf, dieWidth }) => {
  const alignSelfPartial = alignSelf
    ? css`
        align-self: ${alignSelf};
      `
    : null;

  return (
    <span
      css={css`
        ${alignSelfPartial}
        display: block;
        width: calc(${dieWidth}px * 0.2);
        height: calc(${dieWidth}px * 0.2);
        border-radius: 50%;
        background-color: white;
        box-shadow: inset calc(${dieWidth}px / 24) calc(${dieWidth}px / 24)
          calc(${dieWidth}px / 12) rgba(0, 0, 0, 0.2);
      `}
    />
  );
};
