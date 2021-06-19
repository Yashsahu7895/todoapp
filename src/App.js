import React, { useState } from "react";

const App = () => {
    const [kaam, setKaam] = useState(["work 1", "work 2", "work 3", "eotk 4"]);
    //Controlled input
    const [input, setInput] = useState("");

    const addTask = () => {
        const newKaam = kaam.slice();
        newKaam.push(input);
        setKaam(newKaam);
        setInput("");
    };

    return (
        <div>
            <h2>ToDo List App</h2>
            Enter New Task:
            <input
                type="text"
                placeholder="new task"
                value={input}
                onChange={(eve) => setInput(eve.target.value)}
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {kaam.map((item) => {
                    return <li>{item}</li>;
                })}
            </ul>
        </div>
    );
};

export default App;
