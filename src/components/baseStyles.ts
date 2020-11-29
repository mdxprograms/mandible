import { setStyle } from '@wallerbuilt/mantle'

// global colors
export const colors = {
  black: "#000",
  dark: "#222",
  darkBlue: "darkcyan",
  darkGray: "#555",
  gray: "#bbb",
  lightGray: "#eee",
  mediumGray: "#cdcdcd",
  red: "tomato",
  white: "#fff",
};

const radius = "5px"

// Shared styles
export const borderRadius = ["border-radius", radius];
export const boxShadow = ["box-shadow", `0 0 20px ${colors.gray}`];
export const boxShadowHover = ["box-shadow", `0 0 5px ${colors.white}`];
export const flexCenterWrap = [
  ["align-items", "center"],
  ["display", "flex"],
  ["flex-wrap", "wrap"],
  ["justify-content", "center"],
]

// button base styles
export const buttonStyle = setStyle([
  ["background", colors.lightGray],
  ["border", "none"],
  borderRadius,
  boxShadow,
  ["color", colors.black],
  ["cursor", "pointer"],
  ["display", "flex"],
  ["font-size", "12px"],
  ["font-weight", "600"],
  ["justify-content", "center"],
  ["letter-spacing", "1.2px"],
  ["outline", 0],
  ["padding", "9px 15px"],
  ["text-transform", "uppercase"],
]);

// button hover
export const btnHover = setStyle([
  ["background", colors.mediumGray],
  boxShadowHover,
  ["color", colors.darkGray],
]);

export const btnLeave = setStyle([
  ["background", colors.lightGray],
  boxShadow,
  ["color", colors.black],
]);