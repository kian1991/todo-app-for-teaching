import { FormEvent, useState } from "react";

type TodoInputProps = {
  onTodoSubmit: (text: string) => void;
};

export function TodoInput({ onTodoSubmit }: TodoInputProps) {
  const [text, setText] = useState<string>("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Unterbindet standard verhalten i.e. page refresh etc.
    console.log(text);
    // call callback function from props
    onTodoSubmit(text);
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
