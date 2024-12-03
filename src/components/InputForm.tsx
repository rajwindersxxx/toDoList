import { useState } from 'react';
import { motion } from 'motion/react';
interface props {
  onFormSubmit: (newRecord: {
    title: string;
    note: string;
    isDone: boolean;
    id: string;
    date: string;
  }) => void;
}
export function InputForm({ onFormSubmit }: props) {
  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const uniqueId = crypto.randomUUID();
  const d = new Date();
  function handleFormData(e: React.SyntheticEvent) {
    e.preventDefault();
    if (!title && !note) return;
    const newRecord: {
      title: string;
      note: string;
      isDone: boolean;
      id: string;
      date: string;
    } = {
      id: uniqueId, // change is later
      title: title,
      note: note,
      isDone: false,
      date: d.toISOString(),
    };
    onFormSubmit(newRecord);
    setTitle('');
    setNote('');
  }

  return (
    <div className="overflow-hidden">
      <motion.div
        className="bg-purple-400 max-w-[600px]  m-4 rounded p-4  flex flex-col items-center gap-4 sm:mx-auto"
        initial={{ y: '-100%', opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: 'linear', duration: 0.3 }}
      >
        <h2 className="text-xl font-semibold text-white text-center">
          Create a task list
        </h2>
        <form
          className="w-full flex flex-col gap-4 h-full"
          onSubmit={handleFormData}
        >
          <input
            className="title w-full  rounded p-2 placeholder:text-gray-400 "
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
          />
          <textarea
            className="note w-full rounded p-2 placeholder:text-gray-400 h-full resize-none"
            name="note"
            placeholder="note"
            value={note}
            onChange={e => setNote(e.target.value)}
            rows={2}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                e.preventDefault();
                // Submit the form here
                handleFormData(e);
              }
            }}
            required
          ></textarea>
          <button
            className="button bg-purple-800 text-white px-4 py-2 rounded hover:bg-purple-900"
            type="submit"
          >
            Add task
          </button>
        </form>
      </motion.div>
    </div>
  );
}
