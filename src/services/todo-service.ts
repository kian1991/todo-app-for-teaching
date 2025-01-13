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
  // fetch todos from API
  // const response = await fetch(TODO_API_URL);
  // const data: Todo[] = await response.json();
  return new Promise((resolve) => resolve(todos));
}
