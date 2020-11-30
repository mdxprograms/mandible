import { DOM } from "@wallerbuilt/mantle"
import { changeRoute, routes } from "../../router"
import styles from "./styles"

const { nav, a } = DOM

const NavLink = (text: string, route): HTMLAnchorElement =>
  styles.link(
    a({}, text).on({
      click() {
        changeRoute(route());
      },
      mouseover() {
        styles.linkHover(this);
      },
      mouseleave() {
        styles.link(this);
      }
    })
  ); 

const Nav = styles.container(
  nav({ className: "navbar" }, [
    NavLink("Counter", () => routes.counter),
    NavLink("Todos", () => routes.todos),
  ])
);

export default Nav;