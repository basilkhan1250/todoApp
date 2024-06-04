import React from 'react';
import './App.css';
import { useState } from 'react';
import { Showvalues } from './showvalues.js';
import ThemeContext from './context/context.js';

function App() {
  const [data, setData] = useState([]);
  const [inputText, setInputText] = useState("");
  // console.log(data)

  return (

    <ThemeContext.Provider value={data}>


      <div className="h-screen bg-gradient-to-b from-sky-500 to-sky-300 justify-center text-center font-sans">
        <h1 className="font-bold flex justify-center py-10 text-5xl">Todo App</h1>
        <input
          onChange={(e) => {
            setInputText(e.target.value);
          }}
          value={inputText}
          className="justify-center w-72 mr-10 justify-center items-center flex-wrap bg-zinc-200 text-zinc-600 font-mono ring-1 ring-zinc-400 focus:ring-2 focus:ring-rose-400 outline-none duration-300 placeholder:text-zinc-600 placeholder:opacity-50 rounded-full px-4 py-1 shadow-md focus:shadow-lg focus:shadow-rose-400"
          placeholder="Type here..."
          name="text"
          type="text"
        />
        <button
          onClick={() => {
            setData([...data, inputText]);
            setInputText("")
          }}
          className="bg-rose-300 py-1 px-4 rounded-lg ml-5 hover:brightness-110 active:brightness-90"
        >
          Click To Add
        </button>
        <button
          onClick={() => {
            setData([])
          }}
          className="bg-rose-300 py-1 px-4 rounded-lg ml-5 hover:brightness-110 active:brightness-90">
          Delete All
        </button>
        <Showvalues />

      </div >
    </ThemeContext.Provider>
  );
}

export default App;




