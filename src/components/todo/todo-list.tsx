import { useEffect, useState } from "react";
import { Todo } from "../../types";
import { fetchTodos } from "../../services/todo-service";
import { TodoListItem } from "./todo-list-item";
import { TodoInput } from "./todo-input";
import { Container } from "../ui/container";

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then((todos) => setTodos(todos));
  }, []);

  function handleTodoClick(id: number) {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(newTodos);
  }

  function handleTodoSubmit(text: string) {
    const newTodo: Todo = {
      id: todos.length + 1,
      userId: 1,
      completed: false,
      title: text,
    };
    // add newTodo to the state
    setTodos([...todos, newTodo]);
  }

  return (
    <Container>
      <div className="flex flex-col gap-2 text-center">
        <TodoInput onTodoSubmit={(text) => handleTodoSubmit(text)} />
        <ul className="list-none text-white">
          {todos.map((todo) => (
            <TodoListItem
              key={todo.id}
              todo={todo}
              onTodoClick={() => handleTodoClick(todo.id)}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
}
