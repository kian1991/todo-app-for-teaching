import { TodoListItem } from "./todo-list-item";
import { TodoInput } from "./todo-input";
import { Container } from "../ui/container";
import { useTodoStore } from "../../store/todo-store";

export function TodoList() {
  const todos = useTodoStore((state) => state.todos);

  return (
    <Container>
      <div className="flex flex-col gap-2 text-center">
        <TodoInput />
        {todos && (
          <ul className="list-none text-white">
            {todos.map((todo) => (
              <TodoListItem key={todo.id} todo={todo} />
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}
