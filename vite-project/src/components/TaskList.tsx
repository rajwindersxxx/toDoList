import { Task } from './Task';

interface props {
  records: {
    title: string;
    note: string;
    isDone: boolean;
    id: string;
  }[];
  onTaskStatusChange: (id: string) => void;
  onTaskDelete: (id: string) => void;
  onTaskUpdate: (id: string, title: string, note: string) => void;
}
export function TaskList({
  records,
  onTaskStatusChange,
  onTaskDelete,
  onTaskUpdate,
}: props) {
  return (
    <>
      <div className="text-center">
        {records.map(item => (
          <Task
            title={item.title}
            note={item.note}
            isDone={item.isDone}
            id={item.id}
            key={item.id}
            onTaskStatusChange={onTaskStatusChange}
            onTaskDelete={onTaskDelete}
            onTaskUpdate={onTaskUpdate}
          />
        ))}
      </div>
    </>
  );
}

//temp using title as key
