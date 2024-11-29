import { useState } from 'react';

interface props {
  onFormSubmit: (newRecord: {
    title: string;
    note: string;
    isDone: boolean;
    id: string;
  }) => void;
}
export function InputForm({ onFormSubmit }: props) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const uniqueId = crypto.randomUUID();

  function handleFormData(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const newRecord: {
      title: string;
      note: string;
      isDone: boolean;
      id: string;
    } = {
      title: title,
      note: note,
      isDone: false,
      id: uniqueId, // change is later
    };
    onFormSubmit(newRecord);
  }

  return (
    <div className="bg-purple-400 max-w-[600px]  m-4 rounded p-4  flex flex-col items-center gap-4 sm:mx-auto">
      <h2 className="text-xl font-semibold text-white text-center">Create a task list</h2>
      <form
        className="w-full flex flex-col gap-4 h-full"
        onSubmit={handleFormData}
      >
        <input
          className="w-full  rounded p-2 placeholder:text-gray-400"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
        />
        <textarea
          className="w-full rounded p-2 placeholder:text-gray-400 h-full group"
          name="note"
          placeholder="note"
          value={note}
          onChange={e => setNote(e.target.value)}
          required
        ></textarea>
        <button
          className="bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-900 group"
          type="submit"
        >
          Add task
        </button>
      </form>
    </div>
  );
}
