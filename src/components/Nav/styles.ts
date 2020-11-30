import { setStyle } from "@wallerbuilt/mantle"
import { colors, flexCenterWrap } from "../baseStyles"

const styles = {
  container: setStyle([
    ...flexCenterWrap,
    ["background", colors.black],
    ["width", "100%"],
    ["font-size", "20px"],
    ["height", "100%"],
    ["margin", "0 0 40px"],
    ["padding", "20px 0"]
  ]),
  link: setStyle([
    ["color", colors.white],
    ["cursor", "pointer"],
    ["margin-right", "10px"],
    ["text-decoration", "none"],
    ["text-transform", "uppercase"],
  ]),
  linkHover: setStyle([["text-decoration", "underline"]]),
}; 

export default styles