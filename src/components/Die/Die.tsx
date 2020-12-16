/* @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react/macro' // eslint-disable-line @typescript-eslint/no-unused-vars

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
          width: 100px;
          height: 100px;
          transform-style: preserve-3d;
        `}
      >
        <div className="face first-face">
          <span className="dot"></span>
        </div>
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
