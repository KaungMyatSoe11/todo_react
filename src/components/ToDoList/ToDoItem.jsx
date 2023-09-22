/* eslint-disable react/prop-types */
import { useContext, useRef, useState } from "react";
import {
  RiEdit2Fill,
  RiDeleteBin2Fill,
  RiCheckFill,
  RiCloseFill,
} from "react-icons/ri";
import { ToDoContext } from "../../context/ToDoProvider";

import complete from "../../assets/completed2.mp3";

const ToDoItem = ({ todo }) => {
  const { deleteToDo, editToDo } = useContext(ToDoContext);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(true);
  const refEditInput = useRef(null);
  const refAudio = useRef(new Audio(complete));
  const DeleteHandler = () => {
    deleteToDo(todo.id);
  };

  const EditHandler = () => {
    setIsEditMode(true);
    setIsReadOnly(false);
    refEditInput.current.focus();
  };

  const CancelHandler = () => {
    setIsEditMode(false);
    setIsReadOnly(true);
    refEditInput.current.value = todo.text;
    console.log(todo.text);
  };

  const SaveChangeHandler = () => {
    setIsEditMode(false);
    setIsReadOnly(true);
    //go to save chagne database
    todo.text = refEditInput.current.value;
    editToDo(todo);
  };

  const CompleteCheckHandler = (e) => {
    if (e.target.checked) {
      refAudio.current.volume = 0.8;
      console.log(refAudio.current);
      refAudio.current.play();
    }
    todo.completed = e.target.checked;
    editToDo(todo);
  };

  return (
    <div className="flex mt-4 justify-between items-center w-[90%] bg-slate-400 py-4 px-5">
      <div className="flex gap-6 items-center w-[90%]">
        <input
          onClick={(e) => CompleteCheckHandler(e)}
          type="checkbox"
          name="chk-completed"
          id="chk-completed"
          className="cursor-pointer  checked:bg-red-200 border-4"
          defaultChecked={todo.completed ? true : false}
        />
        <input
          type="text"
          ref={refEditInput} //const r=docu.getbyid("")
          defaultValue={todo.text}
          readOnly={isReadOnly}
          className={`outline-none bg-transparent  w-full ${
            !isEditMode && todo.completed ? "line-through text-gray-200" : ""
          }`}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              SaveChangeHandler();
            }
          }}
        />
      </div>

      {isEditMode ? (
        <div>
          <button className="mr-4" onClick={SaveChangeHandler}>
            <RiCheckFill size={22} className="text-green-400" />
          </button>
          <button onClick={CancelHandler}>
            <RiCloseFill size={22} className="text-red-500" />
          </button>
        </div>
      ) : (
        <div>
          <button className="mr-4" onClick={EditHandler}>
            <RiEdit2Fill size={22} className="text-yellow-300" />
          </button>
          <button onClick={DeleteHandler}>
            <RiDeleteBin2Fill size={22} className="text-red-500" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ToDoItem;
