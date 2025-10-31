import React from "react";
import { nanoid } from "nanoid";

const Form = ({ setData }) => {
  const [input, setInput] = React.useState("");

  const submit = (e) => {
    e.preventDefault();

    if (input.trim() === "") return;

    setData((pState) => {
      return [...pState, { title: input, id: nanoid() }];
    });
    setInput("");
  };

  return (
    <form className="flex" onSubmit={submit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="p-2.5 bg-amber-400 grow text-2xl text-amber-950 rounded-l-2xl"
        type="text"
        placeholder="Input your text here!"
      />
      <button
        className="p-2.5 cursor-pointer bg-blue-400 w-[100px]
			   text-2xl text-green-900
			   font-bold rounded-r-2xl
			   active:bg-blue-500"
      >
        SEND
      </button>
    </form>
  );
};

export default Form;
