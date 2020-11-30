import { DOM, mount, setStyle } from "@wallerbuilt/mantle";
import { flexCenterWrap } from "./components/baseStyles";
import Router, { routes } from "./router"

const { main } = DOM

const App = setStyle([...flexCenterWrap])(main({}, routes.counter));

mount(document.getElementById("app"), Router(App))
