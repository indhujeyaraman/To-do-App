import Header from "./components/Header";
import InputTask from "./components/InputTask";
import TodoList from "./components/TodoList";
import { useState } from "react";
import type { Todo } from "./model";
const App = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTask, setEditTask] = useState<Todo | null>(null);
  const handleAddOrEditTask = () => {
    if (task.trim() === "") return;
    if (editTask) {
      setTodos(
        todos.map((todo) =>
          todo.id === editTask.id ? { ...todo, title: task, date: date } : todo
        )
      );
      setEditTask(null);
    } else {
      setTodos([
        ...todos,
        { id: Date.now(), title: task, date: date, completed: false },
      ]);
      setTask("");
      setDate("");
    }
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (todo: Todo) => {
    setEditTask(todo);
    setTask(todo.title);
    setDate(todo.date);
  };
  const handleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="bg-pink-300 h-screen p-32">
      <Header />
      <InputTask
        handleAddOrEditTask={handleAddOrEditTask}
        setTask={setTask}
        setDate={setDate}
        task={task}
        date={date}
      />
      <TodoList
        todos={todos}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handleComplete={handleComplete}
      />
    </div>
  );
};

export default App;
