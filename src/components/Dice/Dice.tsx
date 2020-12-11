/* @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react/macro' // eslint-disable-line @typescript-eslint/no-unused-vars

export const Dice = ({ children }: { children: React.ReactNode }) => (
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
        grid-template-columns: repeat(5, calc(20% - 0.4rem));
        grid-template-rows: 100%;
      `}
    >
      {children}
    </div>
  </div>
)
