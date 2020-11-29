import { setStyle } from "@wallerbuilt/mantle";
import { borderRadius, boxShadow, colors, flexCenterWrap } from '../baseStyles'

export const counterStyle = setStyle([
  ["background", colors.white],
  borderRadius,
  boxShadow,
  ["min-height", "100px"],
  ["padding", "0 0 50px"],
  ["position", "relative"],
  ["width", "320px"],
  ...flexCenterWrap,
]);


export const countValueStyle = setStyle([
  ["color", colors.dark],
  ["display", "flex"],
  ["font-size", "24px"],
  ["font-weight", "bold"],
  ["justify-content", "center"],
  ["width", "50px"]
]);

export const countValueIncStyle = setStyle([
  ["color", colors.darkBlue]
])

export const countValueDecStyle = setStyle([
  ["color", colors.red]
])

export const timerStyle = setStyle([
  ["background", colors.lightGray],
  ["bottom", 0],
  ["display", "flex"],
  ["justify-content", "space-around"],
  ["padding", "12px 0"],
  ["position", "absolute"],
  ["width", "100%"]
]);

export default {
  counterStyle,
  countValueStyle,
  countValueIncStyle,
  countValueDecStyle,
  timerStyle,
};
