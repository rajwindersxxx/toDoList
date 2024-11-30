import { useState } from 'react';
import { Button } from './Button';
import { motion } from 'motion/react';
interface props {
  title: string;
  note: string;
  isDone: boolean;
  id: string;
  onTaskStatusChange: (id: string) => void;
  onTaskDelete: (id: string) => void;
  onTaskUpdate: (id: string, title: string, note: string) => void;
}
export function Task({
  title,
  note,
  isDone,
  onTaskStatusChange,
  onTaskDelete,
  onTaskUpdate,
  id,
}: props) {
  const [editMode, setEditMode] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newNote, setNewNote] = useState(note);

  function handleUpdateForm() {
    onTaskUpdate(id, newTitle, newNote);
    setEditMode(!editMode);
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
    >
      <div className="bg-purple-400 p-4 m-4 w-[400px]  rounded  flex flex-col gap-y-4">
        <div className="flex justify-between gap-4">
          {editMode ? (
            <motion.input
              initial={{ height: 0, opacity: 1 }}
              animate={{ height: 30, opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              type="text"
              className="rounded bg-purple-500 border-b w-full p-1 text-white"
              value={newTitle}
              onChange={e => setNewTitle(e.target.value)}
              placeholder="Enter new title"
            />
          ) : (
            <h2
              className={`text-xl font-semibold text-white  ${
                isDone ? 'line-through' : ''
              } `}
            >
              {title}
            </h2>
          )}
          {!isDone ? (
            <Button onClick={() => onTaskStatusChange(id)}>
              <svg
                className="float-end"
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </Button>
          ) : (
            <Button onClick={() => onTaskStatusChange(id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </Button>
          )}
        </div>

        {editMode ? (
          <motion.textarea
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 60, opacity: 1 }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2 },
            }}
            className="rounded bg-purple-500 border-b w-full p-1 resize-none overflow-hidden"
            value={newNote}
            onChange={e => setNewNote(e.target.value)}
            placeholder="Enter new note"
          ></motion.textarea>
        ) : (
          <p className="">{note}</p>
        )}
        <div className="buttons flex justify-end gap-4">
          {editMode ? (
            <Button onClick={handleUpdateForm}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="m424-296 282-282-56-56-226 226-114-114-56 56 170 170Zm56 216q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
              </svg>
            </Button>
          ) : (
            <Button onClick={() => setEditMode(!editMode)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
              >
                <path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" />
              </svg>
            </Button>
          )}
          <Button className="p-0" onClick={() => onTaskDelete(id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
            >
              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
            </svg>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
