/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { useEffect, useState } from "react";
import { MAX, MIN, POSITIONS } from "../../constants";
import { useGame } from "../../GameProvider";
import { DieState } from "../../types";
import { getRandomNumber } from "../../util";
import { DieColumn, Dot, Face } from "./index";

interface DieProps {
  id: string;
  number?: number;
  width: number;
}

export const Die: React.FC<DieProps> = ({ id, number, width }) => {
  const {
    state: { diceDisabled, dice },
    toggleHoldDie,
  } = useGame();

  const isHeld = dice
    ? dice.find((dieState: DieState) => dieState.id === id)?.hold
    : false;

  const [held, setHeld] = useState<boolean>(false);
  const [xPos, setXPos] = useState<number>(0);
  const [yPos, setYPos] = useState<number>(0);

  useEffect(() => {
    setHeld(!!isHeld);
  }, [isHeld]);

  useEffect(() => {
    if (!number) return;

    const spins = getRandomNumber(MAX, MIN) - 1;
    const { x, y } = POSITIONS[number - 1][spins];

    setXPos(x + 1800);
    setYPos(y + 1800);
  }, [number]);

  const handleClick = () => {
    toggleHoldDie(id);
  };

  return (
    <div
      css={css`
        align-items: center;
        cursor: ${diceDisabled ? "not-allowed" : "pointer"};
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
  );
};
