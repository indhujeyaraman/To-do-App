interface Props {
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddOrEditTask: () => void;
  setDate: React.Dispatch<React.SetStateAction<string>>;
  task: string;
  date: string;
}
const InputTask = ({
  setTask,
  handleAddOrEditTask,
  setDate,
  task,
  date,
}: Props) => {
  return (
    <div>
      <input
        className="bg-neutral-300 p-5 rounded-full w-full mt-20 text-3xl"
        placeholder="Add a Task..."
        type="text"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      {task.trim() !== "" && (
        <div className="flex items-center gap-1 mt-5 absolute right-36 top-64">
          <input
            className=" p-3 rounded-xl text-3xl text-transparent"
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
            }}
          />
          <button
            className="bg-indigo-950 text-white text-xl p-4 px-7 rounded-full"
            onClick={handleAddOrEditTask}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
};

export default InputTask;
