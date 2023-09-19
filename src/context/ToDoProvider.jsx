/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "ttt",
      completed: true,
    },
    {
      id: 3,
      text: "ttt",
      completed: false,
    },
    {
      id: 2,
      text: "ttt",
      completed: false,
    },
  ]);

  const addToDo = (newTodo) => {
    newTodo.id = uuidv4();
    setTodos([...todos, newTodo]);
  };

  const deleteToDo = (todoId) => {
    console.log(todoId);
    const filterToDo = todos.filter((todo) => todo.id != todoId);
    setTodos([...filterToDo])
  };

  return (
    <ToDoContext.Provider value={{ todos, addToDo, deleteToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
