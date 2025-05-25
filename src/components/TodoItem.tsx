import type { Todo } from "../model";
import { FaCalendar, FaTrash, FaEdit, FaCheck } from "react-icons/fa";
interface Props {
  todo: Todo;
  handleDelete: (id: number) => void;
  handleEdit: (todo: Todo) => void;
  handleComplete: (id: number) => void;
}

const TodoItem = ({ todo, handleDelete, handleEdit, handleComplete }: Props) => {
  return (
    <li className="bg-gray-400 p-5 rounded-2xl mt-6 flex justify-between">
      <span className="flex flex-col">
        <span
          className={`text-2xl font-semibold ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.title}
        </span>
        <span className="text-md text-gray-700 px-2 mt-1.5 flex gap-2">
         
          <span className="mt-1">
            <FaCalendar />
          </span>
          {todo.date}
        </span>
      </span>
      <div className="flex items-center gap-4">
        <span className="cursor-pointer text-green-600" onClick={() => handleEdit(todo)}><FaEdit /></span>
        <span className="cursor-pointer text-blue-600" onClick={() => handleDelete(todo.id)}><FaTrash /></span>
        <span className="cursor-pointer text-red-600" onClick={() => handleComplete(todo.id)}><FaCheck /></span>
      </div>
    </li>
  );
};

export default TodoItem;
