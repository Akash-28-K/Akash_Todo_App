"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, toggleTodo, deleteTodo } from "../features/todo/todoSlice";

export default function Todo() {
  const [task, setTask] = useState("");
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!task.trim()) return;
    dispatch(addTodo(task));
    setTask("");
  };

  return (
    <div  id="d" style={{ padding: "20px", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Todo List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ width: "100%", padding: "5px" }}
      />
      <br /><br />
      <button onClick={handleAdd} style={{ padding: "8px 16px", cursor: "pointer" }}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id} style={{ margin: "5px 0" }}>
            <span
              onClick={() => dispatch(toggleTodo(t.id))}
              style={{ textDecoration: t.completed ? "line-through" : "none", cursor: "pointer" }}
            >
              {t.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(t.id))} style={{ marginLeft: "10px" }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
