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
          <li className="text-lg font-bold text-purple-100">
            Total: <span className="text-yellow-300">{totalTasks}</span>
          </li>
          <li className="text-lg font-bold text-purple-100">
            Done: <span className="text-red-300">{taskCompleted}</span>
          </li>
          <li className="text-lg font-bold text-purple-100">
            Left:
            <span className="text-green-300">{totalTasks - taskCompleted}</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
