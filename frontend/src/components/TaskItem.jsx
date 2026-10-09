import { IconPlaylistX } from "@tabler/icons-react";
const TaskItem = (props) => {
  return (
    <div>
      <div className="border rounded-xl mt-5 flex items-center">
        <input type="checkbox" className="peer size-5 w-[10%]" />
        <div className="peer-checked:line-through w-full">
          <h1 className="font-semibold text-xl">{props.Title}</h1>
          <p>{props.Description}</p>
          <p className="text-sm">{props.Date}</p>
        </div>
        <button className="flex w-[10%] px-3 gap-1" title="Delete">
          <IconPlaylistX stroke={2} />
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
