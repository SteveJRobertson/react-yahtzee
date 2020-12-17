/* @jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react/macro"; // eslint-disable-line @typescript-eslint/no-unused-vars
import {
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  useEffect,
  useState,
} from "react";
import { NUM_DICE } from "../../constants";
import { useGame } from "../../GameCtx";
import { Die } from "../Die";

interface DiceProps {
  width: number;
}

export const Dice: ForwardRefExoticComponent<
  DiceProps & RefAttributes<HTMLDivElement>
> = forwardRef(({ width }, ref) => {
  const { diceState } = useGame();

  const DICE_SPACER = 1.5;
  const calculateWidth = (newWidth: number) =>
    Math.floor(newWidth / NUM_DICE) -
    16 * ((DICE_SPACER * (NUM_DICE - 1)) / NUM_DICE);

  const [dieWidth, setDieWidth] = useState<number>(calculateWidth(width));

  useEffect(() => {
    setDieWidth(calculateWidth(width));
  }, [width]);

  const renderDice = () => {
    if (!diceState) return null;

    let rollForward = false;

    return diceState.map(({ id, score }, index) => {
      rollForward = !rollForward;
      return (
        <Die
          id={id}
          number={score}
          rotation={rollForward ? "forwards" : "backwards"}
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
});
