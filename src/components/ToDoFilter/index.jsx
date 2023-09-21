import { useContext } from "react";
import { ToDoContext } from "../../context/ToDoProvider";

const ToDoFilter = () => {
  const { setIsCompletedFilter } = useContext(ToDoContext);
  return (
    <div className="flex justify-end w-[90%] mt-5">
      <div>
        <input
          type="checkbox"
          name="chkfilter"
          id="chkfilter"
          onChange={(e) => {
            console.log(e);
            setIsCompletedFilter(e.target.checked);
          }}
        />
        <label className="text-white ml-2 cursor-pointer" htmlFor="chkfilter" >
          Completed
        </label>
      </div>
    </div>
  );
};

export default ToDoFilter;
