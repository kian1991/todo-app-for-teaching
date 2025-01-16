import { Todo } from "../../types";
import { fetchTodos } from "../../services/todo-service";
import { TodoListItem } from "./todo-list-item";
import { TodoInput } from "./todo-input";
import { Container } from "../ui/container";
import { useQuery } from "@tanstack/react-query";

export function TodoList() {
  const {
    data: todos,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["todo"],
    queryFn: fetchTodos,
  });

  function handleTodoClick(id: number) {
    if (!todos) return;
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
  }

  function handleTodoSubmit(text: string) {
    const newTodo: Todo = {
      id: todos.length + 1,
      userId: 1,
      completed: false,
      title: text,
    };
    // add newTodo to the state
  }

  return (
    <Container>
      <div className="flex flex-col gap-2 text-center">
        {error && (
          <span className="font-mono font-semibold tracking-tighter text-red-400">
            {error.message}
          </span>
        )}
        <TodoInput onTodoSubmit={(text) => handleTodoSubmit(text)} />
        {isLoading && <div className="my-5 animate-spin text-5xl">🦭</div>}
        {todos && (
          <ul className="list-none text-white">
            {todos.map((todo) => (
              <TodoListItem
                key={todo.id}
                todo={todo}
                onTodoClick={() => handleTodoClick(todo.id)}
              />
            ))}
          </ul>
        )}
      </div>
    </Container>
  );
}
