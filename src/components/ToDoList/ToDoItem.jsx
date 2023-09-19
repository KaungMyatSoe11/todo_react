/* eslint-disable react/prop-types */
import { useContext } from "react";
import { RiEdit2Fill, RiDeleteBin2Fill } from "react-icons/ri";
import { ToDoContext } from "../../context/ToDoProvider";
const ToDoItem = ({ todo }) => {
  const { deleteToDo } = useContext(ToDoContext);

  const DeleteHandler=()=>{
    deleteToDo(todo.id)
  }

  return (
    <div className="flex mt-4 justify-between items-center w-[85%] bg-slate-400 py-4 px-5">
      <div className="flex gap-6 items-center">
        <input
          type="checkbox"
          name="chk-completed"
          id="chk-completed"
          defaultChecked={todo.completed ? true : false}
        />
        <p
          className="text-lg
         text-white"
        >
          {todo.text}
        </p>
      </div>
      <div>
        <button className="mr-4">
          <RiEdit2Fill size={22} className="text-yellow-300" />
        </button>
        <button onClick={DeleteHandler}>
          <RiDeleteBin2Fill size={22} className="text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
