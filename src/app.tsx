import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TodoList } from "./components/todo/todo-list";

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen items-center justify-center bg-teal-950">
        <TodoList />
      </div>
    </QueryClientProvider>
  );
}
