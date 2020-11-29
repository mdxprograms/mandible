import { DOM } from "@wallerbuilt/mantle"

import { TimerBtn, ClearBtn } from "./Button"
import { timerStyle } from "./styles"

const { div } = DOM

const Timer = timerStyle(div({}, [TimerBtn, ClearBtn]));

export default Timer;