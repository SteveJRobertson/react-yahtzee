/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { HTMLAttributes } from "react";

interface FaceProps {
  dieWidth: number;
  held?: boolean;
  position: string;
}

export const Face: React.FC<FaceProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  dieWidth,
  held,
  position,
}) => {
  const spaceBetweenPartial = css`
    justify-content: space-between;
  `;
  let facePartial;

  switch (position) {
    case "first":
      facePartial = css`
        align-items: center;
        justify-content: center;
        transform: translateZ(calc(${dieWidth}px / 2));
      `;
      break;
    case "second":
      facePartial = css`
        ${spaceBetweenPartial}
        transform: rotateX(-180deg) translateZ(calc(${dieWidth}px / 2));
      `;
      break;
    case "third":
      facePartial = css`
        ${spaceBetweenPartial}
        transform: rotateY(90deg) translateZ(calc(${dieWidth}px / 2));
      `;
      break;
    case "fourth":
      facePartial = css`
        ${spaceBetweenPartial}
        transform: rotateY(-90deg) translateZ(calc(${dieWidth}px / 2));
      `;
      break;
    case "fifth":
      facePartial = css`
        ${spaceBetweenPartial}
        transform: rotateX(90deg) translateZ(calc(${dieWidth}px / 2));
      `;
      break;
    case "sixth":
      facePartial = css`
        ${spaceBetweenPartial}
        transform: rotateX(-90deg) translateZ(calc(${dieWidth}px / 2));
      `;
      break;
    default:
      break;
  }

  return (
    <div
      css={css`
        display: flex;
        box-sizing: border-box;
        padding: 15%;
        background-color: ${held
          ? "rgba(139, 0, 0, 0.85)"
          : "rgba(220, 20, 60, 0.85)"};
        width: ${dieWidth}px;
        height: ${dieWidth}px;
        position: absolute;
        ${facePartial}
      `}
    >
      {children}
    </div>
  );
};
