import ToDoForm from "./components/ToDoForm";
import ToDoProvider from "./context/ToDoProvider";

function App() {
  return (
    <ToDoProvider>
      <div className="bg-slate-500 w-[60%] mx-auto px-6 py-4">
        <ToDoForm />
      </div>
    </ToDoProvider>
  );
}

export default App;
