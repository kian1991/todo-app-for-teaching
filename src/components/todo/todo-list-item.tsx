import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Todo } from "../../types";
import { updateTodo } from "../../services/todo-service";

type TodoListItemProps = {
  todo: Todo;
};

export function TodoListItem({ todo }: TodoListItemProps) {
  const { mutate } = useMutation({
    mutationFn: updateTodo,
  });

  const queryClient = useQueryClient();

  function handleClick() {
    mutate({
      ...todo,
      completed: !todo.completed,
    });
    queryClient.invalidateQueries({
      queryKey: ["todo"],
    });
  }

  return (
    <li
      onClick={handleClick}
      className={
        todo.completed ? "cursor-pointer line-through" : "cursor-pointer"
      }
    >
      {todo.title}
    </li>
  );
}
