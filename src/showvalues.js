import React, { useState, useContext } from "react";
import ThemeContext from "./context/context";





export function Showvalues(props) {

    const value = useContext(ThemeContext)
    console.log(value);
    return (
        <>
            {value.map((x, i) => (
                <ul className="list-disc list-inside mt-5 text-lg mr-72" key={i}>
                    <li className="my-3">{x}</li>
                    <button
                        onClick={(e => {
                            e.target.parentNode.remove()
                        })} className="bg-rose-300 py-1 px-4 rounded-lg ml-5 hover:brightness-110 active:brightness-90">Delete</button>
                    <button

                        className="bg-rose-300 py-1 px-4 rounded-lg ml-5 hover:brightness-110 active:brightness-90">Edit</button>
                </ul>
            ))}
        </>
    );
}


