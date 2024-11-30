import { TaskStatus } from './TaskStatus';
interface props {
  totalTasks: number;
  taskCompleted: number;
}
export function Header({ totalTasks, taskCompleted }: props) {
  return (
    <>
      <nav className="bg-purple-600  flex flex-col gap-4  justify-between items-center p-8 sm:flex-row sm:py-4">
        <h1 className="text-white font-serif text-4xl font-semibold">
          ToDoList
        </h1>
        <ul className="flex gap-4">
          <TaskStatus className="text-yellow-400" value={totalTasks}>
            Total
          </TaskStatus>
          <TaskStatus className="text-green-400" value={taskCompleted}>
            Done
          </TaskStatus>
          <TaskStatus
            className="text-red-400"
            value={totalTasks - taskCompleted}
          >
            Left
          </TaskStatus>
        </ul>
      </nav>
    </>
  );
}
