/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro"; // eslint-disable-line @typescript-eslint/no-unused-vars
import { RefAttributes, useEffect, useState } from "react";
import useResizeObserver from "use-resize-observer";
import { NUM_DICE } from "../../constants";
import { useGame } from "../../GameProvider";
import { Die } from "../Die";

export const Dice: React.FC<RefAttributes<HTMLDivElement>> = () => {
  const {
    state: { dice },
  } = useGame();

  const { ref, width = 1 } = useResizeObserver<HTMLDivElement>();

  const DICE_SPACER = 1.5;
  const calculateWidth = (newWidth: number) =>
    Math.floor(newWidth / NUM_DICE) -
    16 * ((DICE_SPACER * (NUM_DICE - 1)) / NUM_DICE);

  const [dieWidth, setDieWidth] = useState<number>(calculateWidth(width));

  useEffect(() => {
    setDieWidth(calculateWidth(width));
  }, [width]);

  const renderDice = () => {
    if (!dice) return null;

    return dice.map(({ id, count, score }, index) => {
      return (
        <Die
          id={id}
          count={count}
          number={score}
          width={dieWidth}
          key={index}
        />
      );
    });
  };

  return (
    <div
      ref={ref}
      css={css`
        padding: 1.5rem 1.5rem 0;
        position: relative;
      `}
    >
      <div
        css={css`
          display: grid;
          gap: ${DICE_SPACER}rem ${DICE_SPACER}rem;
          grid-auto-flow: column;
          grid-template-columns: repeat(5, ${dieWidth}px);
          grid-template-rows: 100%;
          height: ${dieWidth}px;
        `}
      >
        {renderDice()}
      </div>
    </div>
  );
};
