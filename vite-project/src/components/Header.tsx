export function Header() {
  return (
    <>
      <nav className="bg-purple-600  flex flex-col gap-4  justify-between items-center p-8 sm:flex-row sm:py-4">
        <h1 className="text-white font-serif text-4xl font-semibold">
          ToDoList
        </h1>
        <ul className="flex gap-4">
          <li className="text-lg font-bold text-purple-100">
            task: <span className="text-yellow-300">54</span>
          </li>
          <li className="text-lg font-bold text-purple-100">
            task left: <span className="text-green-300">12</span>
          </li>
          <li className="text-lg font-bold text-purple-100">
            task done: <span className="text-blue-300">7</span>
          </li>
        </ul>
      </nav>
    </>
  );
}
