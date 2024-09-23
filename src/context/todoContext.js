import { createContext, useContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider(props) {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");

  const handleAddTodo = (e) => {
    setTodo(text);
  };

  const value = [todo, setTodo, handleAddTodo, text, setText];
  return <TodoContext.Provider value={value} {...props}></TodoContext.Provider>;
} //Cung cap value cho function

function useTodo() {
  const context = useContext(TodoContext);
  if (typeof context === "undefined")
    throw new Error("useCount must be used within a TodoProvider");
  return context;
}

export { TodoProvider, useTodo };
