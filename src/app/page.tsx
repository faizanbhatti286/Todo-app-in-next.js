"use client"
import { useState } from "react";

export default function Home() {
  // Define state
  const [todos, setTodos] = useState([
    { movie: "Salaar", id: 1 },
    { movie: "Sultan", id: 2 },
  ]);

  const [inputVal, setInput] = useState("");
  const [id, setId] = useState(0);

  // Function to add or update a todo item
  const addItem = () => {
    let obj: any = todos.find((item) => item.id == id);

    if (obj) {
      let newArray = todos.filter((item) => item.id !== obj.id);
      setTodos([...newArray, { movie: inputVal, id: id }]);
      setInput("");
      setId(0);
      return;
    }
    setTodos([...todos, { movie: inputVal, id: id }]);
    setInput("");
    setId(0);
  };

  // Function to edit a todo item
  const editItem = (id: any) => {
    let obj: any = todos.find((item) => item.id == id);
    setInput(obj.movie);
    setId(obj.id);
  };

  // Function to delete a todo item
  const delItem = (id: any) => {
    let newArray = todos.filter((item) => item.id !== id);
    setTodos([...newArray]);
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-pink-200 to-purple-400 rounded-xl shadow-2xl">
      <h1 className="text-center text-4xl font-bold text-white mb-6 transform hover:scale-105 transition-all duration-300">
        Todo App
      </h1>

      {/* Start input area */}
      <div className="flex justify-between gap-4 mt-5">
        <input
          type="text"
          value={inputVal}
          onChange={(event) => setInput(event.target.value)}
          className="w-[60%] p-3 text-lg rounded-lg shadow-md focus:outline-none bg-white"
          placeholder="Enter movie name"
        />
        <input
          type="number"
          value={id}
          onChange={(event: any) => setId(event.target.value)}
          className="w-[20%] p-3 text-lg rounded-lg shadow-md focus:outline-none bg-white"
          placeholder="Enter ID"
        />
        <button
          onClick={addItem}
          className="w-[20%] p-3 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-lg shadow-lg transform hover:scale-110 transition-all duration-300"
        >
          Add Movie
        </button>
      </div>
      {/* End input area */}

      {/* Heading */}
      <h2 className="text-center text-3xl font-semibold text-white mt-8 mb-6">
        Movies List
      </h2>

      {/* Movies List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {/* Movie grid item */}
        {todos.map((item: any, i: any) => {
          return (
            <div
              key={i}
              className="bg-gradient-to-r from-teal-400 to-blue-500 shadow-lg rounded-xl p-5 transform hover:scale-105 hover:rotate-2 transition-all duration-300"
            >
              <div className="flex justify-between items-center text-lg">
                <span className="bg-yellow-500 text-white rounded-full h-10 w-10 flex items-center justify-center">
                  {i + 1}
                </span>
                <span
                  onClick={() => delItem(item.id)}
                  className="cursor-pointer text-red-600 hover:text-red-800 transition-colors"
                >
                  X
                </span>
              </div>
              <div className="mt-4 text-2xl text-white">{item.movie}</div>
              <div className="mt-2 text-right">
                <h2
                  onClick={() => editItem(item.id)}
                  className="cursor-pointer text-pink-400 hover:text-pink-600 transition-colors"
                >
                  Edit
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

