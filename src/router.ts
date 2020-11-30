import { DOM, append, clear, compose, dispatch } from "@wallerbuilt/mantle";

import Nav from "./components/Nav";
import Todos from "./components/Todos";
import Counter from "./components/Counter";

const { div } = DOM;

export const routes = {
  counter: Counter(0),
  todos: Todos({ items: [] }),
};

export const changeRoute = (route) => dispatch("route:changed", route);

const Router = (app) =>
  div({}, [Nav, app]).when({
    "route:changed": (_, route) => compose(append(route), clear)(app),
  });

export default Router