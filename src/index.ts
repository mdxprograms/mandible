import { DOM, mount } from "@wallerbuilt/mantle";
import Counter from "./components/Counter"

const { main, section, h2 } = DOM

const Intro = section({}, h2({}, "Mandible Examples"));

const App = main({}, [Intro, Counter(0)]);

mount(document.getElementById("app"), App)
