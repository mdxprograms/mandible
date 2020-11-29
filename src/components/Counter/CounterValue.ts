import { DOM } from "@wallerbuilt/mantle"

import { countValueStyle } from './styles'
import { counterValueEvents } from "./events"

const { h4 } = DOM

const CountValue = (count: number) =>
  countValueStyle(
    h4({ className: "counter-value" }, `${count}`).when({
      ...counterValueEvents(count).when,
    })
  );

export default CountValue