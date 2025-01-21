import { useTodoStore } from "../../store/todo-store";
import { Todo } from "../../types";

type TodoListItemProps = {
  todo: Todo;
};

export function TodoListItem({ todo }: TodoListItemProps) {
  const checkTodo = useTodoStore((state) => state.checkTodo);

  return (
    <li
      onClick={() => checkTodo(todo.id)}
      className={
        todo.completed ? "cursor-pointer line-through" : "cursor-pointer"
      }
    >
      {todo.title}
    </li>
  );
}
