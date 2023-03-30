import React from "react";
import { useState } from "react";

const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (event) => {
    event.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank!");
    }
    props.addTodo(title, desc);
    setTitle("");
    setDesc("");
  };
  return (
    <div>
      <form onSubmit={submit} className="card border p-5 m-4 bg-dark">
        <div className="form-group text-light ">
          <label className="form-label" htmlFor="todo">
            Todo
          </label>
          <input
            type="text"
            className="form-control "
            id="todo"
            placeholder="Todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group text-light py-5">
          <label className="form-label" htmlFor="desc">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="desc"
            placeholder="Description"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-danger">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
