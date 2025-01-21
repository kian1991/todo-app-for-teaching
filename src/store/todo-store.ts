import { create } from "zustand";
import { Todo } from "../types";
import { initialTodos } from "./todo-data";
import { persist } from "zustand/middleware";

// 1. Type für den State definieren
type TodoState = {
  todos: Todo[];
  isLoggedIn: boolean;
};

type TodoActions = {
  addTodo(text: string): void;
  checkTodo(id: number): void;
};

// 2. den store createn mit initial values (initialTodos)
export const useTodoStore = create<TodoState & TodoActions>()(
  persist(
    (set, get) => ({
      todos: initialTodos,
      isLoggedIn: false,
      addTodo(text) {
        set((state) => ({
          todos: [
            ...state.todos,
            {
              id: state.todos.length + 1,
              completed: false,
              userId: 1,
              title: text,
            },
          ],
        }));
      },
      checkTodo(id) {
        const newTodos = get().todos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        );
        set({ todos: newTodos });
      },
    }),
    { name: "todo-store" },
  ),
);

// 3. Optional: Mit der Persist Middleware den Zustand im local storage persistieren.
