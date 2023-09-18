/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid';

export const ToDoContext = createContext();

const ToDoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);


  const addToDo = (newTodo) => {
    newTodo.id=uuidv4();
   setTodos([...todos,newTodo])
  };

  return (
    <ToDoContext.Provider value={{ todos, addToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoProvider;
