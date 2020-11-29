import { DOM } from "@wallerbuilt/mantle";

import { IncBtn, DecBtn } from './Button'
import CounterValue from "./CounterValue"
import Timer from "./Timer"

import { counterStyle } from "./styles"

const { div } = DOM

const Counter = (count: number) =>
  counterStyle(
    div({ className: "counter" }, [
      IncBtn,
      CounterValue(count),
      DecBtn,
      Timer,
    ])
  );

export default Counter;