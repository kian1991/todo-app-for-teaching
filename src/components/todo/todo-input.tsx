import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { addTodo } from "../../services/todo-service";

export function TodoInput() {
  const [text, setText] = useState<string>("");

  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addTodo,
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Unterbindet standard verhalten i.e. page refresh etc.

    mutate({
      userId: 1,
      completed: false,
      title: text,
    });
    queryClient.invalidateQueries({ queryKey: ["todo"] });

    // reset text
    setText("");
  }

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        type="text"
        className="rounded p-1"
      />
      <button
        type="submit"
        className="rounded bg-slate-900 px-4 py-2 font-bold text-white"
      >
        ADD
      </button>
    </form>
  );
}
