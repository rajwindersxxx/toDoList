import { useState } from 'react';
import { Button } from './Button';
import { AnimatePresence, motion } from 'motion/react';
import { TaskDateAgo } from './TaskDateAgo';
import {
  CirclePlusIcon,
  CircleTickIcon,
  DeleteIcon,
  EditIcon,
  TickIcon,
} from './Icons';
interface props {
  title: string;
  note: string;
  isDone: boolean;
  id: string;
  taskDate: string;
  onTaskStatusChange: (id: string) => void;
  onTaskDelete: (id: string) => void;
  onTaskUpdate: (id: string, title: string, note: string) => void;
}
export function Task({
  title,
  note,
  isDone,
  taskDate,
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
      <div className="bg-purple-400 p-4 m-4 w-[400px]  rounded  flex flex-col justify-start gap-y-4">
        <div className="flex justify-between gap-4">
          <AnimatePresence mode="wait">
            {editMode ? (
              <motion.input
                initial={{ height: 28, opacity: 0 }}
                animate={{ height: 30, opacity: 1 }}
                exit={{ height: 28, opacity: 0, transition: { duration: 0.2 } }}
                type="text"
                key="edit"
                className="rounded bg-purple-500 border-b w-full p-1 text-white"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Enter new title"
              />
            ) : (
              <h2
                key="view"
                className={`text-xl font-semibold text-white  ${
                  isDone ? 'line-through' : ''
                } `}
              >
                {title}
              </h2>
            )}
          </AnimatePresence>
          {!isDone ? (
            <Button onClick={() => onTaskStatusChange(id)}>
              <CirclePlusIcon />
            </Button>
          ) : (
            <Button onClick={() => onTaskStatusChange(id)}>
              <TickIcon />
            </Button>
          )}
        </div>
        <AnimatePresence mode="wait">
          {editMode ? (
            <motion.textarea
              initial={{ height: 24, opacity: 0 }}
              animate={{ height: 60, opacity: 1 }}
              exit={{
                height: 24,
                opacity: 0,
                transition: { duration: 0.2 },
              }}
              key="edit"
              className="rounded bg-purple-500 border-b w-full p-1 resize-none overflow-hidden"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Enter new note"
            ></motion.textarea>
          ) : (
            <p key="view" className="">
              {note}
            </p>
          )}
        </AnimatePresence>
        <div className="buttons flex justify-between gap-4">
          <TaskDateAgo taskDate={taskDate} />
          <div className="flex gap-2">
            {editMode ? (
              <Button onClick={handleUpdateForm}>
                <CircleTickIcon />
              </Button>
            ) : (
              <Button onClick={() => setEditMode(!editMode)}>
                <EditIcon />
              </Button>
            )}

            <Button className="p-0" onClick={() => onTaskDelete(id)}>
              <DeleteIcon />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
