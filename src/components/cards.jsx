import React from "react";

const Cards = ({ title, id, setData }) => {
  const [showInput, setShowInput] = React.useState(false);
  const [input, setInput] = React.useState(title);

  const deleteItem = () => {
    setData((pState) => {
      const newArr = pState.filter((item) => item.id !== id);
      return newArr;
    });
  };

  const updateItem = () => {
    if (showInput) {
      setData((pState) => {
        return pState.map((item) =>
          item.id === id ? { id, title: input } : item
        );
      }); 
    }
    setShowInput(!showInput);
  };

  return (
    <div className="bg-gray-100 rounded-2xl p-5 my-2.5">
      {!showInput ? (
        <h2 className="text-[#a99a86] text-2xl px-5">{title}</h2>
      ) : (
        <input
          className="w-full py-1.5 bg-white rounded-lg px-2.5"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      )}
      <div className="flex gap-6 mt-5 px-5">
        <button
          onClick={deleteItem}
          className="bg-red-600 px-5 py-2.5
			   text-amber-100 rounded-xl
			   active:bg-red-700"
        >
          delete
        </button>
        <button
          onClick={updateItem}
          className="bg-blue-600 px-5 py-2.5
			   text-amber-100 rounded-xl
			   active:bg-blue-700"
        >
          {showInput ? "Save" : "Update"}
        </button>
      </div>
    </div>
  );
};

export default Cards;
