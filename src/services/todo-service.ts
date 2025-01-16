// import { TODO_API_URL } from "../constants";
import { Todo } from "../types";

const todos: Todo[] = [
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

export async function fetchTodos(): Promise<Todo[]> {
  // simulating latency of 500ms
  return new Promise((resolve) => setTimeout(() => resolve(todos), 1200));
}

export function getTodosDirekt() {
  return todos;
}
