import React, { useState } from "react";

export const Todolist = () =>{
    const [ task, setTask] = useState("");
    const [ list, setList ] = useState([]);

    const addTask = (event) => {
        event.preventDefault();
        if (task.trim() === ""){
            return
        };
        setList([...list, task]);
        setTask("")
    }

    const deleteTask = (item) => {
        setList(list.filter((element, id) =>{
            return item != element;
        }))
    }


    return (
        <div className="container p-5 mt-3 rounded bg-secondary">
            <h1 className="text-center mt-4 mb-4">My Todos</h1>
            <div className="mb-3">
                <form onSubmit={addTask}>
                    <input className="form-control" placeholder="What do you need to do?" type="tet" value={task} onChange={(e) =>{setTask(e.target.value);}}/>
                </form>
            </div>
            <div className="list">
                <ul className="list-group"> 
                    {list.map((item, index) => {
                        return <li key={index} className="list-group-item d-flex justify-content-between hidden-icon">
                            {item}
                            <span key={index} onClick={() => {deleteTask(item)}}><i className="far fa-trash-alt text-danger"></i></span>
                        </li>
                    })}
                    <span className="list-group-item bg-light text-end fw-lighter">
                        {list.length === 0 ? "No tasks, add one please" : list.length + " items left."}
                    </span>
                </ul>
            </div>
        </div>
    )
}