import "./App.css";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import About from "./MyComponents/About";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import React, { useState } from "react";
import { useEffect } from "react";

// import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    console.log("I'm onDelete of", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    if (title && desc) {
      console.log("Adding...");
      const newTodo = {
        sno: todos.length + 1,
        title: title,
        desc: desc,
      };
      setTodos([...todos, newTodo]);
      console.log(newTodo);

      localStorage.setItem("todos", JSON.stringify(todos));
    }
  };

  let bodyStyle = {
    height: "800px",
  };

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div style={bodyStyle}>
        <Header title="TODOS" searchBar={false} />
        <h3 className="text-center"> Your Todo List!</h3>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </div>
            }
          ></Route>
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
