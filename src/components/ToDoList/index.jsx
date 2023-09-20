import { useContext } from "react";
import ToDoItem from "./ToDoItem";
import { ToDoContext } from "../../context/ToDoProvider";

const ToDoList = () => {
  const {todos}=  useContext(ToDoContext)
    return (
    <div className="mt-5">
      <h2 className="text-white text-xl">ToDoList</h2>
      <div className="mt-5">
        {todos.map(todo=> 
          <ToDoItem todo={todo} key={todo.id} />
            )}
      </div>
    </div>
  );
};

export default ToDoList;
