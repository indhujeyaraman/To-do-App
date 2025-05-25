import type { Todo } from "../model";
import TodoItem from "./TodoItem";

interface Props {
  todos: Todo[];
  handleDelete: (id: number) => void;
  handleEdit: (todo: Todo) => void;
  handleComplete: (id: number) => void;
}
const TodoList = ({
  todos,
  handleDelete,
  handleEdit,
  handleComplete,
}: Props) => {
  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </ul>
  );
};

export default TodoList;
