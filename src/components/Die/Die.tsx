/* @jsxImportSource @emotion/react */
import { jsx, css, keyframes } from '@emotion/react/macro' // eslint-disable-line @typescript-eslint/no-unused-vars
import { HTMLAttributes, useEffect, useState } from 'react'
import { MAX, MIN, POSITIONS } from '../../constants'
import { useGame } from '../../GameProvider'
import { DieState } from '../../types'
import { getRandomNumber } from '../../util'

interface DotProps {
  alignSelf?: string
  dieWidth: number
}

const Dot: React.FC<DotProps> = ({ alignSelf, dieWidth }) => {
  const alignSelfPartial = alignSelf
    ? css`
        align-self: ${alignSelf};
      `
    : null

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
  )
}

interface FaceProps {
  dieWidth: number
  held?: boolean
  position: string
}

const Face: React.FC<FaceProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  dieWidth,
  held,
  position,
}) => {
  const spaceBetweenPartial = css`
    justify-content: space-between;
  `
  let facePartial

  switch (position) {
    case 'first':
      facePartial = css`
        align-items: center;
        justify-content: center;
        transform: translateZ(calc(${dieWidth}px / 2));
      `
      break
    case 'second':
      facePartial = css`
        ${spaceBetweenPartial}
        transform: rotateX(-180deg) translateZ(calc(${dieWidth}px / 2));
      `
      break
    case 'third':
      facePartial = css`
        ${spaceBetweenPartial}
        transform: rotateY(90deg) translateZ(calc(${dieWidth}px / 2));
      `
      break
    case 'fourth':
      facePartial = css`
        ${spaceBetweenPartial}
        transform: rotateY(-90deg) translateZ(calc(${dieWidth}px / 2));
      `
      break
    case 'fifth':
      facePartial = css`
        ${spaceBetweenPartial}
        transform: rotateX(90deg) translateZ(calc(${dieWidth}px / 2));
      `
      break
    case 'sixth':
      facePartial = css`
        ${spaceBetweenPartial}
        transform: rotateX(-90deg) translateZ(calc(${dieWidth}px / 2));
      `
      break
    default:
      break
  }

  return (
    <div
      css={css`
        display: flex;
        box-sizing: border-box;
        padding: 15%;
        background-color: ${held
          ? 'rgba(139, 0, 0, 0.85)'
          : 'rgba(220, 20, 60, 0.85)'};
        width: ${dieWidth}px;
        height: ${dieWidth}px;
        position: absolute;
        ${facePartial}
      `}
    >
      {children}
    </div>
  )
}

interface DieColumnProps {
  dieWidth: number
  justifyContent?: string
}

const DieColumn: React.FC<DieColumnProps & HTMLAttributes<HTMLDivElement>> = ({
  children,
  dieWidth,
  justifyContent = 'space-between',
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      justify-content: ${justifyContent || 'space-between'};
      width: calc(${dieWidth}px * 0.21);
      height: calc(${dieWidth}px * 0.7);
    `}
  >
    {children}
  </div>
)

interface DieProps {
  id: string
  number?: number
  width: number
}

export const Die: React.FC<DieProps> = ({ id, number, width }) => {
  const {
    state: { diceDisabled, dice },
    toggleHoldDie,
  } = useGame()

  const isHeld = dice
    ? dice.find((dieState: DieState) => dieState.id === id)?.hold
    : false

  const [held, setHeld] = useState<boolean>(false)
  const [xPos, setXPos] = useState<number>(0)
  const [yPos, setYPos] = useState<number>(0)

  useEffect(() => {
    setHeld(!!isHeld)
  }, [isHeld])

  useEffect(() => {
    if (!number) return

    const spins = getRandomNumber(MAX, MIN) - 1
    const { x, y } = POSITIONS[number - 1][spins]

    setXPos(x + 1800)
    setYPos(y + 1800)
  }, [number])

  const handleClick = () => {
    toggleHoldDie(id)
  }

  return (
    <div
      css={css`
        align-items: center;
        cursor: ${diceDisabled ? 'not-allowed' : 'pointer'};
        display: flex;
        justify-content: center;
      `}
      {...(!diceDisabled && { onClick: handleClick })}
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
            transform: rotateX(${xPos}deg) rotateY(${yPos}deg);
            transition: transform 2s;
          `}
        >
          <Face dieWidth={width} held={held} position="first">
            <Dot dieWidth={width} />
          </Face>

          <Face dieWidth={width} held={held} position="second">
            <Dot dieWidth={width} />
            <Dot alignSelf="flex-end" dieWidth={width} />
          </Face>

          <Face dieWidth={width} held={held} position="third">
            <Dot dieWidth={width} />
            <Dot alignSelf="center" dieWidth={width} />
            <Dot alignSelf="flex-end" dieWidth={width} />
          </Face>

          <Face dieWidth={width} held={held} position="fourth">
            <DieColumn dieWidth={width}>
              <Dot dieWidth={width} />
              <Dot dieWidth={width} />
            </DieColumn>
            <DieColumn dieWidth={width}>
              <Dot dieWidth={width} />
              <Dot dieWidth={width} />
            </DieColumn>
          </Face>

          <Face dieWidth={width} held={held} position="fifth">
            <DieColumn dieWidth={width}>
              <Dot dieWidth={width} />
              <Dot dieWidth={width} />
            </DieColumn>
            <DieColumn dieWidth={width} justifyContent="center">
              <Dot dieWidth={width} />
            </DieColumn>
            <DieColumn dieWidth={width}>
              <Dot dieWidth={width} />
              <Dot dieWidth={width} />
            </DieColumn>
          </Face>

          <Face dieWidth={width} held={held} position="sixth">
            <DieColumn dieWidth={width}>
              <Dot dieWidth={width} />
              <Dot dieWidth={width} />
              <Dot dieWidth={width} />
            </DieColumn>
            <DieColumn dieWidth={width}>
              <Dot dieWidth={width} />
              <Dot dieWidth={width} />
              <Dot dieWidth={width} />
            </DieColumn>
          </Face>
        </div>
      </div>
    </div>
  )
}
