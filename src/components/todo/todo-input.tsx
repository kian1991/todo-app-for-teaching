import { FormEvent, useState } from "react";
import { useTodoStore } from "../../store/todo-store";

export function TodoInput() {
  const [text, setText] = useState<string>("");
  const addTodo = useTodoStore((state) => state.addTodo);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Unterbindet standard verhalten i.e. page refresh etc.
    addTodo(text);
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
