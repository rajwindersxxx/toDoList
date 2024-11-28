export function InputForm() {
  return (
    <div className="bg-purple-400 h-[300px] m-4 rounded p-4  flex flex-col items-center gap-4 sm:w-2/3 sm:mx-auto">
      <h2 className="text-lg text-center">Create a task list</h2>
      <form className="w-full flex flex-col gap-4 h-full">
        <input
          className="w-full  rounded p-2 placeholder:text-gray-400"
          type="text"
          name="title"
          placeholder="Title"
        />
        <textarea
          className="w-full rounded p-2 placeholder:text-gray-400 h-full"
          name="note"
          placeholder="note"
        ></textarea>
        <button
          className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-900  mx-auto block"
          type="submit"
        >
          Add task
        </button>
      </form>
    </div>
  );
}
