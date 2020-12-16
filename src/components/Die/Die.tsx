/* @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react/macro' // eslint-disable-line @typescript-eslint/no-unused-vars
import { HTMLAttributes } from 'react'

interface DotProps {
  dieWidth: number
}

const Dot: React.FC<DotProps> = ({ dieWidth }) => {
  return (
    <span
      css={css`
        display: block;
        width: calc(${dieWidth}px * 0.2);
        height: calc(${dieWidth}px * 0.2);
        border-radius: 50%;
        background-color: white;
        box-shadow: inset calc(${dieWidth}px / 24) calc(${dieWidth}px / 24)
          calc(${dieWidth}px / 12) rgba(0, 0, 0, 0.2);
      `}
    />
  )
}

interface FaceProps {
  dieWidth: number
  position: string
}

const Face: React.FC<FaceProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  dieWidth,
  position,
}) => (
  <div
    css={css`
      display: flex;
      box-sizing: border-box;
      padding: 15%;
      background-color: rgba(220, 20, 60, 0.85);
      width: ${dieWidth}px;
      height: ${dieWidth}px;
      position: absolute;
    `}
  >
    {children}
  </div>
)
interface DieProps {
  width: number
}

export const Die: React.FC<DieProps> = ({ width }) => (
  <div
    css={css`
      align-items: center;
      display: flex;
      justify-content: center;
    `}
  >
    <div
      css={css`
        perspective: ${width * 12}px;
        perspective-origin: 50% ${width};
      `}
    >
      <div
        css={css`
          position: relative;
          width: ${width}px;
          height: ${width}px;
          transform-style: preserve-3d;
        `}
      >
        <Face dieWidth={width} position="first">
          <Dot dieWidth={width} />
        </Face>
        <div className="face second-face">
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="face third-face">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

        <div className="face fourth-face">
          <div className="die-column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="die-column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="face fifth-face">
          <div className="die-column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="die-column">
            <span className="dot"></span>
          </div>
          <div className="die-column">
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="face sixth-face">
          <div className="die-column">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
          <div className="die-column">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
)
