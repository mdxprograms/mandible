import { dispatch, compose, setText } from "@wallerbuilt/mantle";

import { baseBtnEvents } from "../baseEvents"
import styles from "./styles";

export const btnEvents = {
  on: baseBtnEvents.on,
  decClick: () => dispatch("counter:decrement"),
  incClick: () => dispatch("counter:increment"),
  startTimerClick: () => dispatch("counter:startTimer"),
  stopTimerClick: () => dispatch("counter:stopTimer"),
};

const counterColor = (count: number) => {
  if (count < 0) {
    return styles.countValueDecStyle;
  } else if (count > 0) {
    return styles.countValueIncStyle;
  }

  return styles.countValueStyle;
};

let counterInterval;

const updateCount = (count: number) => compose(setText(`${count}`), counterColor(count))

export const counterValueEvents = (count: number) => ({
  when: {
    "counter:decrement"(self: HTMLHeadingElement) {
      --count;
      updateCount(count)(self);
    },
    "counter:increment"(self: HTMLHeadingElement) {
      ++count;
      updateCount(count)(self)
    },
    "counter:startTimer"(self: HTMLHeadingElement) {
      counterInterval = setInterval(() => {
        ++count;
        updateCount(count)(self)
      }, 1000);
    },
    "counter:stopTimer"(self: HTMLHeadingElement) {
      count = 0;
      clearInterval(counterInterval);
      updateCount(count)(self)
    },
  },
});

export default {
  btnEvents,
  counterValueEvents,
};
