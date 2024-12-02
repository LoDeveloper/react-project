import React, { useState } from "react";
import "../todolist.css";

function TodoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Add a new task
    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks([...tasks, newTask.trim()]);
            setNewTask(""); // Clear input field
        }
    };

    // Remove a task
    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    // Move a task up
    const moveUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index - 1], updatedTasks[index]] = [updatedTasks[index], updatedTasks[index - 1]];
            setTasks(updatedTasks);
        }
    };

    // Move a task down
    const moveDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    };

    return (
        <div className="todo-container">
            <h1>To-Do List</h1>
            <div className="todo-input">
                <input
                    type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ul className="todo-list">
                {tasks.map((task, index) => (
                    <li key={index} className="todo-item">
                        <span>{task}</span>
                        <div className="todo-buttons">
                            <button onClick={() => moveUp(index)}>Up</button>
                            <button onClick={() => moveDown(index)}>Down</button>
                            <button onClick={() => removeTask(index)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
