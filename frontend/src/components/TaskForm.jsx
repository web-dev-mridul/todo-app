import { IconPlaylistAdd } from "@tabler/icons-react";
import { useState } from "react";
const TaskForm = () => {
  const [title, setTitle] = useState("");

  const addTask = () => {
    fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
      }),
    });
  };
  return (
    <div>
      <div className="mt-10 text-[#0251b0] flex">
        <input
          type="text"
          className="border w-full rounded-l-xl px-2"
          placeholder="Add a new list..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          onClick={addTask}
          className="px-2 py-1 border rounded-r-xl hover:bg-[#0251b0] hover:text-[#c7d1dd] font-semibold flex gap-2"
          title="Add"
        >
          <IconPlaylistAdd stroke={2} />
        </button>
      </div>
    </div>
  );
};

export default TaskForm;
