import React from "react";

export default function TodoItem({ todo, onDelete }) {
  const todoStyle = {
    display: "flex",
    flexDirection: "column",
    width: "40%",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.20)",
  };
  const deleteBtnStyle = {
    flex: "0 0",
    width: "100%",
    boxShadow: "0 3px 6px rgba(255, 0, 0, 0.50)",
  };
  return (
    <div style={todoStyle} className="card text-white bg-dark mb-3">
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDelete(todo)}
        style={deleteBtnStyle}
      >
        Delete
      </button>
      <hr />
    </div>
  );
}
