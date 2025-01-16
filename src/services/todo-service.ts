// import { TODO_API_URL } from "../constants";
import { Todo } from "../types";

let todos: Todo[] = [
  {
    id: 1,
    completed: false,
    title: "Water the Plants 🪴",
    userId: 1,
  },
  {
    id: 2,
    completed: false,
    title: "Walk the dog 🐕",
    userId: 1,
  },
  {
    id: 3,
    completed: true,
    title: "Get the Milk 🐄",
    userId: 1,
  },
];

// async function fakeLatency

export async function fetchTodos(): Promise<Todo[]> {
  // simulating latency of 500ms
  // throw new Error("No Todos Found!");
  return new Promise((resolve) => setTimeout(() => resolve(todos), 0));
}

export async function updateTodo(updatedTodo: Todo) {
  const newTodos = todos.map((todo) =>
    updatedTodo.id === todo.id ? updatedTodo : todo,
  );
  todos = newTodos;
  return todos;
}

export async function addTodo(newTodo: Omit<Todo, "id">) {
  todos = [...todos, { ...newTodo, id: todos.length + 1 }];
}
