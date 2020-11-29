import { DOM } from "@wallerbuilt/mantle";

import { IncBtn, DecBtn, TimerBtn, ClearBtn } from './Button'
import CounterValue from "./CounterValue"

import { counterStyle, timerStyle } from "./styles"

const { div } = DOM

const Counter = (count: number) =>
  counterStyle(
    div({ className: "counter" }, [
      IncBtn,
      CounterValue(count),
      DecBtn,
      timerStyle(div({}, [TimerBtn, ClearBtn])),
    ])
  );

export default Counter;