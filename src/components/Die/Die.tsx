/* @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react/macro' // eslint-disable-line @typescript-eslint/no-unused-vars

export const Die = ({ children }: { children: React.ReactNode }) => (
  <div
    css={css`
      align-items: center;
      display: flex;
      justify-content: center;
    `}
  >
    <div
      css={css`
        perspective: 1200px;
        perspective-origin: 50% 100px;
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
