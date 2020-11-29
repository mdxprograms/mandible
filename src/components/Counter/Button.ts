import { DOM } from "@wallerbuilt/mantle"
import { buttonStyle } from "../baseStyles"
import { btnEvents } from "./events"

const { button } = DOM

const CounterButton = (text: string, click: () => void) =>
  buttonStyle(
    button({}, text).on({
      ...btnEvents.on,
      click,
    })
  );

export const DecBtn = CounterButton("Decrement", btnEvents.decClick)

export const IncBtn = CounterButton("Increment", btnEvents.incClick);

export const TimerBtn = CounterButton("Start Timer", btnEvents.startTimerClick);

export const ClearBtn = CounterButton("Clear Timer", btnEvents.stopTimerClick);

export default CounterButton