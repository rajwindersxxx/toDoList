import { Task } from './Task';

interface props {
  records: {
    title: string;
    note: string;
    isDone: boolean;
    id: string;
  }[];
}
export function TaskList({ records }: props) {
  return (
    <>
      <div className="text-center">
        {records.map(item => (
          <Task
            title={item.title}
            note={item.note}
            isDone={item.isDone}
            key={item.id}
          />
        ))}
      </div>
    </>
  );
}

//temp using title as key
