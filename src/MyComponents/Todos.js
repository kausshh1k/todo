import React from "react";
import TodoItem from "./TodoItem";

const Todos = (props) => {
  let todosStyle = {
    minHeight: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
  };

  let noTodos = {
    fontSize: "30px",
    fontWeight: "bold",
  };

  return (
    <div style={todosStyle}>
      {props.todos.length === 0 ? (
        <h2 className="card p-5" style={noTodos}>
          {" "}
          *** No todos to display ***{" "}
        </h2>
      ) : (
        props.todos.map((todo) => {
          return (
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
          );
        })
      )}
    </div>
  );
};

export default Todos;
