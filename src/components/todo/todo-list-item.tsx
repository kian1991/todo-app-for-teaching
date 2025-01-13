import { Todo } from "../../types";

type TodoListItemProps = {
  todo: Todo;
  onTodoClick: () => void;
};

export function TodoListItem({ todo, onTodoClick }: TodoListItemProps) {
  return (
    <li
      onClick={onTodoClick}
      className={
        todo.completed ? "cursor-pointer line-through" : "cursor-pointer"
      }
    >
      {todo.title}
    </li>
  );
}
