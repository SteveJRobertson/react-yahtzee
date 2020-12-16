/* @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react/macro' // eslint-disable-line @typescript-eslint/no-unused-vars
import {
  forwardRef,
  ForwardRefExoticComponent,
  ReactElement,
  RefAttributes,
  useEffect,
  useState,
} from 'react'
import { NUM_DICE } from '../../constants'
import { Die } from '../Die'

interface DiceProps {
  width: number
}

export const Dice: ForwardRefExoticComponent<
  DiceProps & RefAttributes<HTMLDivElement>
> = forwardRef(({ width }, ref) => {
  const [dieWidth, setDieWidth] = useState<number>(Math.floor(width / NUM_DICE))

  useEffect(() => {
    setDieWidth(Math.floor(width / NUM_DICE))
  }, [width])

  const renderDice = () => {
    let Dice: ReactElement[] = []

    for (let i = 0; i < NUM_DICE; i++) {
      Dice = [...Dice, <Die width={dieWidth} />]
    }

    return Dice
  }

  return (
    <div
      ref={ref}
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
          grid-template-columns: repeat(5, ${dieWidth}px);
          grid-template-rows: 100%;
          height: ${dieWidth}px;
        `}
      >
        {renderDice()}
      </div>
    </div>
  )
})
