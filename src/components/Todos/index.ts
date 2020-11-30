import { DOM } from "@wallerbuilt/mantle";
import { buttonStyle } from "../baseStyles"
import { baseBtnEvents } from "../baseEvents"

const { div, button, p } = DOM;

type Todo = {
  text: string;
  completed: boolean;
};

export type TodosProps = {
  items: Todo[];
};

const TodoItem = (item: Todo) =>
  div({ className: "todo-item" }, [
    p({}, item.text),
    buttonStyle(button({}, "Complete").on(baseBtnEvents.on)),
  ]);

const Todos = ({ items }: TodosProps): HTMLDivElement =>
  div({ className: "todos" }, TodoItem({ text: "Todo #1", completed: false }));

export default Todos;
